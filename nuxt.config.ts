// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-01-01',
  
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  
  css: [
    '~/assets/css/main.css'
  ],

  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME || 'My App',
      description: process.env.APP_DESCRIPTION || '',
      address: process.env.ADDRESS || '',
      phone: process.env.PHONE || '',
      email: process.env.EMAIL || '',
      facebookUrl: process.env.FACEBOOK_URL || '',
      instagramUrl: process.env.INSTAGRAM_URL || '',
      twitterUrl: process.env.TWITTER_URL || '',
      youtubeUrl: process.env.YOUTUBE_URL || '',
      apiBase: process.env.API_BASE_URL || '/api' // Default to /api for server routes
    }
  },

  app: {
    head: {
      title: process.env.APP_NAME || 'My App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})

