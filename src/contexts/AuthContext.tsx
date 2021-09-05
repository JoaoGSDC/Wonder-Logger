import { createContext, useState, useEffect } from 'react'
import Router from 'next/router'
import { setCookie, parseCookies } from 'nookies'
import SweetAlert from 'sweetalert2'

import { api } from '@services/api'
import { clearToken, getToken } from '@lib/tokens'

type SignInData = {
  username: string
  password: string
}

type UserData = {
  code: string
  name: string
  nickname?: string
  picture: string
}

type AuthContextType = {
  isAuthenticated: boolean
  signIn: (data: SignInData) => Promise<void>
  signOut: () => void
  user: UserData
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<UserData>(null)

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'wonder-token': token } = parseCookies()

    if (!token) {
      Router.pathname !== '/login' && Router.push('/login')
    }
  }, [])

  useEffect(() => {
    const { 'wonder-token': token } = parseCookies()

    const updateUserInfo = async () => {
      await setUserInfo()
    }

    if (token) {
      updateUserInfo()
    }
  }, [])

  const signIn = async ({ username, password }: SignInData) => {
    try {
      // const response = await api.post('/session/user', {
      //   username,
      //   password
      // })

      const { token } = {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGF2aWQgVG9sZW50aW5vIiwidXNlcm5hbWUiOiJkYXZpZHRvbGVudGlubyIsInBlcm1pc3Npb24iOiJhZG1pbiJ9.BuRX2xsEbO7rCyzH4rva_nRI_vLXGX40zqS_2cX9XBY'
      }

      setCookie(undefined, 'wonder-token', token, {
        maxAge: 60 * 60 * 1
      })

      api.defaults.headers['Authorization'] = `bearer ${token}`

      await setUserInfo()

      Router.push('/')
    } catch (err) {
      if (err?.response?.status === 403) {
        SweetAlert.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuário ou senha incorretos, tente novamente!',
          confirmButtonColor: '#1d1b76'
        })

        return
      }

      SweetAlert.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuário e/ou senha incorreto',
        confirmButtonColor: '#1d1b76'
      })
    }
  }

  const signOut = () => {
    clearToken()

    Router.push('/')
  }

  const setUserInfo = async () => {
    try {
      // const response = await api.get('/session')

      // const { user } = response.data
      const user = {
        code: '008058',
        name: 'David',
        nickname: 'David',
        picture: null
      }

      setUser(user)
    } catch (e) {}
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}
