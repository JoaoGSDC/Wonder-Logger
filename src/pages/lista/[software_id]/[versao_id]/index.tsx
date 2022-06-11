/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-use-before-define */
/* eslint-disable no-throw-literal */
import { useEffect, useState } from 'react'
import Router from 'next/router'
import Title from '@components/Title'
import PageHeader from '@components/pages/PageHeader'
import Box from '@components/Box'
import Paper from '@components/Paper'
import { TabContext } from '@components/Tabs/index'
import Grid from '@components/Grid'
import { Doughnut as Graph } from 'react-chartjs-2'
import Button from '@components/Button'
import { useForm } from 'react-hook-form'
import TabPanel from '@components/Tabs/TabPanel'
import { DateRangePicker } from '@components/Form/DateRangePicker'

import { BsSearch } from 'react-icons/bs'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { RiCloseLine } from 'react-icons/ri'
import { api } from '@services/api'
import SelectSimple from '@components/Form/Select'
import { Typography } from '@mui/material'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead
} from '@components/Form/Tables'
import TableRowLink from '@components/Form/Tables/TableRowLink'
import { format } from 'date-fns'
import DefaultAlert from '@lib/Alerts/DefaultAlert'

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>

type ExceptionProps = {
  dataHora: string
  id: string
  exceptionName: string
  className: string
  stackTrace: string
}

const DetailSoftware: React.FC<PageProps> = ({ software, versao }) => {
  const [exceptions, setExceptions] = useState<ExceptionProps[]>([])

  const [classSoftware, setClass] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [stackTrace, setStackTrace] = useState('')

  const [exceptionsTypes, setExceptionsTypes] = useState([])
  const { control, handleSubmit } = useForm({
    defaultValues: {
      'intervalo-sugestoes': [null, null]
    }
  })

  useEffect(() => {
    const getInfos = async () => {
      try {
        const { data: softwareClass } = await api.get(
          `/getsoftwareclasses/${software}/${versao}`
        )

        softwareClass.map(softwareClass => {
          softwareClass.value = softwareClass.id
          softwareClass.label = softwareClass.className

          return softwareClass
        })

        setClass([
          { value: null, label: 'Selecione uma opção!' },
          ...softwareClass
        ])

        const { data: exceptionsType } = await api.get(
          `/getexceptionstype/${software}/${versao}`
        )

        exceptionsType.map(exceptionType => {
          exceptionType.value = exceptionType.id
          exceptionType.label = exceptionType.exceptionName

          return exceptionType
        })

        setExceptionsTypes([
          { value: null, label: 'Selecione uma opção!' },
          ...exceptionsType
        ])
      } catch (err) {
        DefaultAlert(
          'error',
          'Nenhuma informação encontrada sobre o software e versão',
          ''
        )

        Router.push('/')
      }
    }
    getInfos()
  }, [])

  const [exception, setException] = useState()
  const [classe, setClasse] = useState()

  const submit = async data => {
    const { data: exceptions } = await api.post(`/getwonderexceptions/`, {
      software,
      version: versao,
      exception: data.exception ? [data.exception] : [],
      classe: data.classe ? [data.classe] : [],
      data_inicio: Number(data['intervalo-sugestoes'][0] || new Date()),
      data_fim: Number(data['intervalo-sugestoes'][1] || new Date())
    })

    setClasse(data.classe)
    setException(data.exception)

    setExceptions(exceptions)
  }

  function gerar_cor_hexadecimal() {
    return (
      '#' +
      parseInt(String(Math.random() * 0xffffff))
        .toString(16)
        .padStart(6, '0')
    )
  }

  return (
    <>
      <Title context="Início" />
      <PageHeader title="Lista de Exceptions" />

      <Box>
        <TabContext value={'1'}>
          <TabPanel value={'1'}>
            <Paper>
              <form onSubmit={handleSubmit(submit)}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <SelectSimple
                      instanceId={1}
                      control={control}
                      name="exception"
                      valueOnly
                      options={exceptionsTypes}
                      label="Exception"
                      placeholder="Selecione o Exception"
                      key={exceptionsTypes?.[0]?.value}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectSimple
                      instanceId={1}
                      control={control}
                      name="classe"
                      valueOnly
                      options={classSoftware}
                      label="Classe"
                      placeholder="Selecione a Classe"
                      key={classSoftware?.[0]?.value}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <DateRangePicker
                      sx={{ width: '100%' }}
                      control={control}
                      name="intervalo-sugestoes"
                    />
                  </Grid>
                </Grid>

                <Grid container justifyContent="flex-end" spacing={3} mt={4}>
                  <Grid item>
                    <Button
                      onClick={e => {
                        e.preventDefault()
                        Router.push('/')
                      }}
                      color="secondary"
                      icon={RiCloseLine}
                      type="button"
                    >
                      Cancelar
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      icon={BsSearch}
                      type="submit"
                      color="primary"
                      variant="contained"
                    >
                      Buscar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </TabPanel>
        </TabContext>
      </Box>

      {exceptions && exceptions.length
        ? (() => {
            const graphAux = []
            let labels = []
            const backgroundColors = []
            let dataGraph = []

            if (exception && classe) {
              exceptions.map(exception => {
                const dateSplited = String(exception.dataHora)
                  .split(' ')[0]
                  .split('/')

                const year = Number(dateSplited[2])
                const month = Number(dateSplited[1])
                const day = Number(dateSplited[0])

                const date = format(
                  new Date(year, month - 1, day),
                  'dd/MM/yyyy'
                )

                if (graphAux.find(graphAux => graphAux.name === date)) {
                  const dateFinded = graphAux.find(
                    graphAux => graphAux.name === date
                  )
                  dateFinded.length++
                } else {
                  graphAux.push({
                    name: date,
                    length: 1,
                    color: gerar_cor_hexadecimal()
                  })
                }

                return exception
              })
              labels = graphAux.map(graphAux => graphAux.name)

              dataGraph = graphAux.map(graphAux => graphAux.length)
            } else if (exception) {
              exceptions.map(exception => {
                if (
                  graphAux.find(
                    graphAux => graphAux.name === exception.className
                  )
                ) {
                  const dateFinded = graphAux.find(
                    graphAux => graphAux.name === exception.className
                  )
                  dateFinded.length++
                } else {
                  graphAux.push({
                    name: exception.className,
                    length: 1,
                    color: gerar_cor_hexadecimal()
                  })
                }

                return exception
              })
              labels = graphAux.map(graphAux => graphAux.name)

              dataGraph = graphAux.map(graphAux => graphAux.length)
            } else {
              exceptions.map(exception => {
                if (
                  graphAux.find(
                    graphAux => graphAux.name === exception.exceptionName
                  )
                ) {
                  const dateFinded = graphAux.find(
                    graphAux => graphAux.name === exception.exceptionName
                  )
                  dateFinded.length++
                } else {
                  graphAux.push({
                    name: exception.exceptionName,
                    length: 1,
                    color: gerar_cor_hexadecimal()
                  })
                }

                return exception
              })
              labels = graphAux.map(graphAux => graphAux.name)

              dataGraph = graphAux.map(graphAux => graphAux.length)
            }

            return (
              <Box>
                <TabContext value={'2'}>
                  <TabPanel value={'2'}>
                    <Paper
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Box width={500}>
                        <Graph
                          data={{
                            labels,
                            datasets: [
                              {
                                data: dataGraph,
                                backgroundColor: graphAux.map(
                                  date => date.color
                                ),
                                borderWidth: 0.5
                              }
                            ]
                          }}
                          options={{
                            plugins: {
                              legend: {
                                labels: {
                                  color: 'white'
                                }
                              }
                            }
                          }}
                        />
                      </Box>
                    </Paper>
                  </TabPanel>
                </TabContext>
              </Box>
            )
          })()
        : ''}
      <Box>
        <TabContext value={'3'}>
          <TabPanel value={'3'}>
            <Paper>
              {exceptions && exceptions.length ? (
                <form onSubmit={handleSubmit(submit)}>
                  <TableContainer style={{ marginTop: '32px' }}>
                    <Table>
                      <TableHead>
                        <TableRow style={{ cursor: 'default' }}>
                          <TableCell>Exception</TableCell>
                          <TableCell align="center">Classe</TableCell>
                          <TableCell align="right">Data do LOG</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {exceptions.map(exception => (
                          <TableRowLink
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                              setModalIsOpen(true)
                              setStackTrace(exception.stackTrace || '')
                            }}
                            key={exception.id}
                          >
                            <TableCell>{exception.exceptionName}</TableCell>
                            <TableCell align="center">
                              {exception.className}
                            </TableCell>
                            <TableCell align="right">
                              {exception.dataHora}
                            </TableCell>
                          </TableRowLink>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </form>
              ) : (
                <Typography fontSize={20} textAlign="center" color="white">
                  Selecione todos os campos
                </Typography>
              )}
            </Paper>
          </TabPanel>
        </TabContext>
        <ModalStackTrace
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          stackTrace={stackTrace}
          setStackTrace={setStackTrace}
        />
      </Box>
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ModalStackTrace: React.FC<any> = ({
  modalIsOpen,
  setModalIsOpen,
  stackTrace,
  setStackTrace
}) => {
  return (
    <Dialog
      fullWidth
      sx={{
        '.MuiPaper-root': { borderRadius: '16px', overflowY: 'visible' },
        overflowY: 'visible'
      }}
      open={modalIsOpen}
      onClose={() => {
        setModalIsOpen(false)
        setStackTrace('')
      }}
    >
      <DialogTitle>Informação</DialogTitle>
      <DialogContent sx={{ overflowY: 'visible' }}>{stackTrace}</DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      software: context.params.software_id,
      versao: context.params.versao_id
    }
  }
}
export default DetailSoftware
