import React from 'react'
import Card from '@components/Card'
import VerticalBar from '@components/Graphics/VerticalBar'
import Title from '@components/Title'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import {
  Container,
  H1Err,
  H1Success,
  H3Err,
  H3Success
} from '../styles/DashboardStyles'

const Dashboard: React.FC = () => {
  return (
    <>
      <Title context="Início" />

      <Container>
        <div style={{ display: 'flex', width: '100%' }}>
          <Card>
            <H3Success>Total de Logs com sucesso</H3Success>
            <H1Success>101</H1Success>
          </Card>

          <Card>
            <H3Err>Total de Logs com erro</H3Err>
            <H1Err>101</H1Err>
          </Card>
        </div>

        <Card>
          <VerticalBar />
        </Card>
        <Card>
          <VerticalBar />
        </Card>
        <Card>
          <VerticalBar />
        </Card>
        <Card>
          <VerticalBar />
        </Card>
        <Card>
          <VerticalBar />
        </Card>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { 'wonder-token': token } = parseCookies(context)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default Dashboard
