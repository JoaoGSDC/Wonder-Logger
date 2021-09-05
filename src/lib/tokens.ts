import { parseCookies, setCookie, destroyCookie } from 'nookies'

export const getToken = (): string => {
  const { 'wonder-token': token } = parseCookies()

  return `bearer ${token}`
}

export const setToken = (token: string): void => {
  setCookie(undefined, 'wonder-token', token, {
    maxAge: 60 * 60 * 1
  })
}

export const clearToken = (): void => {
  destroyCookie(undefined, 'wonder-token')
}
