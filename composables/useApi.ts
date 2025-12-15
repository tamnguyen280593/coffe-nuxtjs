import type { UseFetchOptions } from '#app'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

interface ApiOptions<T> extends Omit<UseFetchOptions<T>, 'method' | 'headers'> {
  method?: HttpMethod
  body?: any
  headers?: Record<string, string>
}

export function useApi<T>(url: string, options: ApiOptions<T> = {}) {
  const config = useRuntimeConfig()
  const baseURL = config.public?.apiBase

  const method = (options.method?.toLowerCase() || 'get') as 'get' | 'post' | 'put' | 'patch' | 'delete'

  const { body, headers, ...restOptions } = options

  const fetchOptions: any = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {}),
    },
    ...restOptions
  }

  if (baseURL) {
    fetchOptions.baseURL = baseURL
  }

  if (body && ['post', 'put', 'patch'].includes(method)) {
    fetchOptions.body = body
  }

  const { data, pending, error, refresh, execute } = useFetch<T>(url, fetchOptions)

  return {
    data,
    pending,
    error,
    refresh,
    execute
  }
}

