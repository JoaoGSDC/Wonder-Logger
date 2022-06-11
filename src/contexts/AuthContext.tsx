import { createContext, useState, useEffect } from 'react'
import Router from 'next/router'
import { setCookie, parseCookies } from 'nookies'

import { api } from '@services/api'
import { clearToken, getToken } from '@lib/tokens'
import DefaultAlert from '@lib/Alerts/DefaultAlert'

type SignInData = {
  username: string
  password: string
}

type UserData = {
  code: string
  name: string
  nickname?: string
  job: string
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

    // if (!token) {
    //   Router.pathname !== '/login' && Router.push('/login')
    // }
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
        maxAge: 60 * 60 * 24
      })

      api.defaults.headers['Authorization'] = `bearer ${token}`

      await setUserInfo()

      Router.push('/')
    } catch (err) {
      if (err?.response?.status === 403) {
        DefaultAlert(
          'error',
          'Oops ...',
          'Usuário ou senha inválidos, tente novamente!'
        )

        return
      }

      DefaultAlert(
        'error',
        'Oops ...',
        'O serviço não está disponível agora tente mais tarde!'
      )
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
        name: 'David Tolentino',
        nickname: 'David Tolentino',
        picture: null,
        job: 'Desenvolvedor Web'
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
