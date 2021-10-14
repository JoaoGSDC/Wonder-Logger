import React from 'react'
import Card from '@components/Card'
import VerticalBar from '@components/Graphics/VerticalBar'
import Title from '@components/Title'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import {
  Container,
  H1Container,
  H1Err,
  H1Success,
  H3Err,
  H3Success
} from '../styles/DashboardStyles'
import DoughnutChart from '@components/Graphics/DoughnutChart'

const Dashboard: React.FC = () => {
  return (
    <>
      <Title context="Início" />

      <Container>
        <div style={{ display: 'flex', width: '100%' }}>
          <Card>
            <H3Success>Total de Logs com sucesso</H3Success>

            <H1Container>
              <H1Success>200</H1Success>
              <DoughnutChart
                label="# of Votes"
                dataNumbers={[200, 404]}
                mainColor="#55d446"
              />
            </H1Container>
          </Card>

          <Card>
            <H3Err>Total de Logs com erro</H3Err>

            <H1Container>
              <H1Err>404</H1Err>
              <DoughnutChart
                label="# of Votes"
                dataNumbers={[404, 200]}
                mainColor="#e64343"
              />
            </H1Container>
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
