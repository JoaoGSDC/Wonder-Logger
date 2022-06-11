import React, { useEffect, useState } from 'react'
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

import { greenGraph, randomGraph, redGraph } from './graphsConfigs'

const Dashboard: React.FC = () => {
  const [logSuccess, setLogSuccess] = useState(0)
  const [logError, setLogError] = useState(0)

  const [graph1, setGraph1] = useState(randomGraph)
  const [graph2, setGraph2] = useState(randomGraph)
  const [graph3, setGraph3] = useState(randomGraph)

  useEffect(() => {
    const getLogs = async () => {
      const logErrorStorage = localStorage.getItem('error')
      setLogError(404 + Number(logErrorStorage))
      setLogSuccess(200)
    }

    getLogs()

    setInterval(() => {
      setGraph1(randomGraph)
      setGraph2(randomGraph)
      setGraph3(randomGraph)
    }, 4000)
  }, [])

  return (
    <>
      <Title context="Início" />

      <Container>
        <div style={{ display: 'flex', width: '100%' }}>
          <Card>
            <H3Success>Total de Logs com sucesso</H3Success>

            <H1Container>
              <H1Success>{logSuccess}</H1Success>
              <DoughnutChart
                label="# of Votes"
                dataNumbers={[logSuccess, logError]}
                mainColor="#55d446"
              />
            </H1Container>
          </Card>

          <Card>
            <H3Err>Total de Logs com erro</H3Err>

            <H1Container>
              <H1Err>{logError}</H1Err>
              <DoughnutChart
                label="# of Votes"
                dataNumbers={[logError, logSuccess]}
                mainColor="#e64343"
              />
            </H1Container>
          </Card>
        </div>

        <Card>
          <VerticalBar graph={redGraph} />
        </Card>
        <Card>
          <VerticalBar graph={graph1} />
        </Card>
        <Card>
          <VerticalBar graph={graph2} />
        </Card>
        <Card>
          <VerticalBar graph={graph3} />
        </Card>
        <Card>
          <VerticalBar graph={greenGraph} />
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
