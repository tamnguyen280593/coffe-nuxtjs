export default defineNuxtPlugin({
  name: 'prevent-reload',
  enforce: 'post',
  setup() {
    if (process.client) {
      const router = useRouter()
      
      // Override router methods to ensure no reloads
      const originalPush = router.push.bind(router)
      const originalReplace = router.replace.bind(router)
      
      router.push = function(to: string | { path: string }): Promise<void> {
        return originalPush(to).catch((err: Error) => {
          // Silently ignore navigation errors
          if (err && err.name !== 'NavigationDuplicated' && err.message !== 'Navigation cancelled') {
            // Ignore other navigation errors
          }
        }) as Promise<void>
      }
      
      router.replace = function(to: string | { path: string }): Promise<void> {
        return originalReplace(to).catch((err: Error) => {
          if (err && err.name !== 'NavigationDuplicated' && err.message !== 'Navigation cancelled') {
            // Ignore other navigation errors
          }
        }) as Promise<void>
      }

      // Intercept all link clicks to prevent page reloads
      document.addEventListener('click', (e: MouseEvent): void => {
        const target = e.target as HTMLElement
        const link = target.closest('a[href]') as HTMLAnchorElement | null
        
        if (link && link.href) {
          const href = link.getAttribute('href')
          
          // Only intercept internal links
          if (href && href.startsWith('/') && !href.startsWith('//')) {
            try {
              const url = new URL(link.href, window.location.origin)
              
              // Check if it's the same origin
              if (url.origin === window.location.origin) {
                // Check if it's already a router link (NuxtLink)
                const isRouterLink = link.hasAttribute('data-nuxt-link') || 
                                    link.closest('[data-nuxt-link]') !== null ||
                                    link.classList.contains('router-link-active') ||
                                    link.classList.contains('router-link-exact-active')
                
                // If it's NOT a router link and it's a different path, prevent default
                if (!isRouterLink && href !== window.location.pathname && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
                  e.preventDefault()
                  e.stopPropagation()
                  e.stopImmediatePropagation()
                  
                  // Use navigateTo for proper SPA navigation
                  navigateTo(href, { 
                    external: false,
                    replace: false
                  }).catch(() => {
                    // Ignore navigation errors
                  })
                  
                  return
                }
              }
            } catch (err) {
              // Ignore URL parsing errors
            }
          }
        }
      }, true) // Use capture phase
    }
  }
})

