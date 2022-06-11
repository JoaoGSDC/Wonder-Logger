/* eslint-disable react/jsx-no-duplicate-props */
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
import TabPanel from '@components/Tabs/TabPanel'

import { BsSearch } from 'react-icons/bs'
import { RiCloseLine } from 'react-icons/ri'
import { api } from '@services/api'
import SelectSimple from '@components/Form/Select'
import { Typography } from '@mui/material'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead
} from '@components/Form/Tables'
import TableRowLink from '@components/Form/Tables/TableRowLink'

const Lista: React.FC = () => {
  const [software, setSoftware] = useState([])
  const [softwares, setSoftwares] = useState([])
  const { control, handleSubmit } = useForm()

  useEffect(() => {
    const getSoftwares = async () => {
      try {
        const { data } = await api.get('/getsoftware/')

        data.map(software => {
          software.value = software.id
          software.label = software.software

          return software
        })

        setSoftwares(
          data.length
            ? [{ value: null, label: 'Selecione uma opção!' }, ...data]
            : [{ value: null, label: 'Nenhum Software encontrado' }]
        )
      } catch (err) {
        setSoftwares([{ value: null, label: 'Nenhum Software encontrado' }])
      }
    }
    getSoftwares()
  }, [])

  const submit = async data => {
    const { data: versions } = await api.get(`/getversion/${data.software}/`)
    console.log(versions)
    setSoftware(versions)
  }

  return (
    <>
      <Title context="Início" />
      <PageHeader title="Lista de Softwares" />

      <Box>
        <TabContext value={'1'}>
          <TabPanel value={'1'}>
            <Paper>
              <form onSubmit={handleSubmit(submit)}>
                <SelectSimple
                  instanceId={1}
                  control={control}
                  name="software"
                  valueOnly
                  options={softwares}
                  label="Software"
                  placeholder="Selecione o Software"
                  key={softwares?.[0]?.value}
                />

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

      <Box>
        <TabContext value={'2'}>
          <TabPanel value={'2'}>
            <Paper>
              {software && software.length ? (
                <form onSubmit={handleSubmit(submit)}>
                  <TableContainer style={{ marginTop: '32px' }}>
                    <Table>
                      <TableHead>
                        <TableRow style={{ cursor: 'default' }}>
                          <TableCell>Software</TableCell>
                          <TableCell align="center">Versão</TableCell>
                          <TableCell align="right">Total Exceptions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRowLink link={`/lista/${1}/${1}`} key={1}>
                          <TableCell>Wonder Logger</TableCell>
                          <TableCell align="center">v1.2</TableCell>
                          <TableCell align="right">432</TableCell>
                        </TableRowLink>
                        <TableRowLink link={`/lista/${1}/${1}`} key={1}>
                          <TableCell>Wonder Logger</TableCell>
                          <TableCell align="center">v1.2</TableCell>
                          <TableCell align="right">432</TableCell>
                        </TableRowLink>
                        <TableRowLink link={`/lista/${1}/${1}`} key={1}>
                          <TableCell>Wonder Logger</TableCell>
                          <TableCell align="center">v1.2</TableCell>
                          <TableCell align="right">432</TableCell>
                        </TableRowLink>
                        <TableRowLink link={`/lista/${1}/${1}`} key={1}>
                          <TableCell>Wonder Logger</TableCell>
                          <TableCell align="center">v1.2</TableCell>
                          <TableCell align="right">432</TableCell>
                        </TableRowLink>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </form>
              ) : (
                <Typography fontSize={20} textAlign="center" color="white">
                  Selecione um software
                </Typography>
              )}
            </Paper>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  )
}

export default Lista
