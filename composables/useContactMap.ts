import { computed } from 'vue'

/**
 * Composable để lấy map URL từ environment config
 * Ưu tiên MAP_EMBED_URL, fallback sang ADDRESS để tự động tạo Google Maps embed URL
 */
export const useContactMap = () => {
  const config = useRuntimeConfig()

  const mapUrl = computed(() => {
    // Ưu tiên sử dụng MAP_EMBED_URL từ env
    const envUrl = config.public.mapEmbedUrl as string | undefined
    if (envUrl && envUrl.trim().length > 0) {
      return envUrl
    }

    // Fallback: tự động tạo Google Maps embed URL từ địa chỉ
    const address = config.public.address as string | undefined
    if (address && address.trim().length > 0) {
      const encoded = encodeURIComponent(address)
      return `https://www.google.com/maps?q=${encoded}&output=embed`
    }

    return ''
  })

  return {
    mapUrl,
  }
}

