/* eslint-disable no-throw-literal */
import { useEffect, useState } from 'react'
import Router from 'next/router'
import Title from '@components/Title'
import PageHeader from '@components/pages/PageHeader'
import Box from '@components/Box'
import Paper from '@components/Paper'
import { TabContext } from '@components/Tabs/index'
import Grid from '@components/Grid'
import Button from '@components/Button'
import { useForm } from 'react-hook-form'
import Input from '@components/Form/Input'
import TabPanel from '@components/Tabs/TabPanel'

import { FaRegSave } from 'react-icons/fa'
import { RiCloseLine } from 'react-icons/ri'
import { api } from '@services/api'

const Manual: React.FC = () => {
  const [file, setFile] = useState<unknown>()
  const [json, setJson] = useState<unknown>()
  const { control, handleSubmit } = useForm()

  function readTextFile(file, callback) {
    const rawFile = new XMLHttpRequest()
    rawFile.overrideMimeType('application/json')
    rawFile.open('GET', file, true)
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status === 200) {
        callback(rawFile.responseText)
      }
    }
    rawFile.send(null)
  }

  useEffect(() => {
    if (file) {
      const obj = URL.createObjectURL(file)
      readTextFile(obj, function (text) {
        try {
          const data = JSON.parse(text)

          if (!data) throw ''

          if (Array.isArray(data)) {
            if (data.length === 0) throw ''

            data.forEach(element => {
              if (
                !element.software ||
                !element.versao ||
                !element.classe ||
                !element.dateHour ||
                !element.message
              ) {
                alert('Dados Inválidos')
                throw ''
              }
            })
          } else {
            if (
              !data.software ||
              !data.versao ||
              !data.classe ||
              !data.dateHour ||
              !data.message
            ) {
              alert('Dados Inválidos')
              throw ''
            }
          }

          setJson(data)
        } catch (err) {
          alert('Arquivo Inválido!')
          setJson(null)
        }
      })
    }
  }, [file])

  const submit = async data => {
    localStorage.setItem(
      'error',
      String(Number(localStorage.getItem('error')) + 1)
    )

    if (json) {
      if (Array.isArray(json)) {
        await json.forEach(async element => {
          await api.post('/importException', element)
        })
      } else {
        await api.post('/importException', json)
      }
      return {}
    }

    try {
      if (
        !data.software ||
        !data.versao ||
        !data.classe ||
        !data.dateHour ||
        !data.message
      )
        return alert('Dados Incompletos')

      const response = await api.post('/importException', data)
      // {
      //   software: data?.software,
      //   versao: data?.versao,
      //   classe: data?.classe,
      //   dateHour: data?.dateHour,
      //   message: data?.message
      // }

      console.log(response.data)
    } catch (err) {}
  }

  return (
    <>
      <Title context="Início" />
      <PageHeader title="Dados Manuais" />

      <Box>
        <TabContext value={'1'}>
          <TabPanel value="1">
            <Paper>
              <form onSubmit={handleSubmit(submit)}>
                <Grid container spacing={12}>
                  <Grid item xs={12}>
                    <Input
                      label="Software"
                      name="software"
                      control={control}
                      placeholder="Informe o software"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={6}>
                  <Grid item xs={6}>
                    <Input
                      label="Versão"
                      name="versao"
                      control={control}
                      placeholder="Informe a versão do software"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Input
                      label="Classe"
                      name="classe"
                      control={control}
                      placeholder="Informe a classe"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={6}>
                  <Grid item xs={6}>
                    <Input
                      label="Data do Erro"
                      name="dateHour"
                      control={control}
                      placeholder="Informe a data do erro"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Input
                      label="Mensagem"
                      name="message"
                      control={control}
                      placeholder="Informe a mensagem de erro"
                    />
                  </Grid>
                </Grid>
                <Grid
                  style={{ color: 'white' }}
                  container
                  alignItems="center"
                  justifyContent="center"
                  mt={1}
                >
                  OU
                </Grid>

                <Grid
                  style={{ color: 'white' }}
                  container
                  mt={3}
                  alignItems="center"
                  justifyContent="center"
                >
                  <input
                    type="file"
                    onChange={e => setFile(e.target.files[0])}
                  />
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
                      icon={FaRegSave}
                      type="submit"
                      color="primary"
                      variant="contained"
                    >
                      Gravar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  )
}

export default Manual
