import React, { useEffect, useState } from 'react'
import Card from '@components/Card'
import Title from '@components/Title'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { parseCookies } from 'nookies'
import { api } from '@services/api'
import {
  Container,
  H1Container,
  H1Err,
  H1Success,
  H3Err,
  H3Label,
  H3Success
} from '../../../styles/DashboardStyles'
import DoughnutChart from '@components/Graphics/DoughnutChart'

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const InfoLogs: React.FC<PageProps> = ({ software, versao }) => {
  const [logSuccess, setLogSuccess] = useState(0)
  const [logError, setLogError] = useState(0)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const getLogs = async () => {
      const { data } = await api.get(`/get/${software}/${versao}`)

      setErrors(data)

      setLogError(data.length)
      setLogSuccess(0)
    }

    getLogs()
  }, [])

  return (
    <>
      <Title context="Início" />

      <Container>
        <Card>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <H3Label color="#fff" style={{ marginRight: 10 }}>
              Software:{' '}
            </H3Label>
            <H3Success>{software}</H3Success>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
            <H3Label color="#fff" style={{ marginRight: 10 }}>
              Versão:{' '}
            </H3Label>
            <H3Success>{versao}</H3Success>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
            <H3Label color="#fff" style={{ marginRight: 10 }}>
              Classe:{' '}
            </H3Label>
            <H3Success>{errors[0]?.classe}</H3Success>
          </div>
        </Card>

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
    props: {
      software: context.params.software,
      versao: context.params.versao
    }
  }
}

export default InfoLogs
