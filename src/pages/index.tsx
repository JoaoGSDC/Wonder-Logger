import React from 'react'
import Card from '@components/Card'
import VerticalBar from '@components/Graphics/VerticalBar'
import Title from '@components/Title'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { Container } from '../styles/DashboardStyles'

const Dashboard: React.FC = () => {
  return (
    <>
      <Title context="Início" />

      <Container>
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
