import axios, { AxiosInstance } from 'axios'
import { parseCookies } from 'nookies'

export function getAPIClient(ctx?: any): AxiosInstance {
  const { 'wonder-token': token } = parseCookies(ctx)

  const data = parseCookies()

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
  })

  api.interceptors.request.use(config => {
    return config
  })

  if (token) {
    api.defaults.headers['Authorization'] = `bearer ${token}`
  }

  return api
}
