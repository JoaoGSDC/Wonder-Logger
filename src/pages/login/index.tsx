import { useContext, useState, useRef, useCallback } from 'react'
import Head from 'next/head'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import { AuthContext } from '@contexts/AuthContext'

import Input from '@components/Form/Input'
import Button from '@components/Form/Button'

import {
  BackgroundOverlay,
  Container,
  DialogContainer,
  LoginContainer,
  LoginContainerHeader
} from './styles'

import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { useForm } from 'react-hook-form'

type SignInData = {
  username: string
  password: string
}

const Login: React.FC = () => {
  const [signInLoading, setSignInLoading] = useState<boolean>(false)
  const { control } = useForm()

  const formRef = useRef<FormHandles>(null)

  const { signIn } = useContext(AuthContext)

  const handleSubmits = useCallback(
    async (data: SignInData) => {
      setSignInLoading(true)

      await signIn(data)

      setSignInLoading(false)
    },
    [signIn]
  )

  return (
    <>
      <Head>
        <title>Wonder Logger</title>
      </Head>
      <Container>
        <BackgroundOverlay>
          <DialogContainer>
            <h1>Wonder Logger - Central de Logs</h1>
          </DialogContainer>
          <LoginContainer>
            <LoginContainerHeader>
              <h1>Acesso ao sistema</h1>
              <p>Digite suas informações</p>
            </LoginContainerHeader>
            <Form ref={formRef} onSubmit={handleSubmits}>
              <Input
                control={control}
                name="username"
                label="Usuário"
                type="text"
                disabled={signInLoading}
                required
              />
              <Input
                control={control}
                name="password"
                label="Senha"
                type="password"
                disabled={signInLoading}
                required
              />
              <Button
                disabled={signInLoading}
                loading={signInLoading}
                type="submit"
              >
                Entrar
              </Button>
              <Button
                disabled={signInLoading}
                type="button"
                appearance="outline-secondary"
              >
                Precisa de ajuda?
              </Button>
            </Form>
          </LoginContainer>
        </BackgroundOverlay>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { 'wonder-token': token } = parseCookies(context)

  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default Login
