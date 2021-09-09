import Router from 'next/router'

import { parseCookies, setCookie, destroyCookie } from 'nookies'

export const getToken = (): string => {
  const { 'megtv-token': token } = parseCookies()

  return `bearer ${token}`
}

export const setToken = (token: string): void => {
  setCookie(undefined, 'megtv-token', token, {
    maxAge: 60 * 60 * 1
  })
}

export const clearToken = (): void => {
  destroyCookie(undefined, 'megtv-token')

  Router.push('/login')
}
