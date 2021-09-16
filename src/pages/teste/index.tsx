import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { AuthContext } from '@contexts/AuthContext'

import { Container } from './styles'

const Login: React.FC = () => {
  const { signIn } = useContext(AuthContext)
  const [state, setState] = useState<any>()

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
    if (state) {
      const objetoURL = URL.createObjectURL(state)
      readTextFile(objetoURL, function (text) {
        const data = JSON.parse(text)
        console.log(data)
      })
    }
  }, [state])

  return (
    <>
      <Head>
        <title>Wonder Logger</title>
      </Head>
      <Container>
        <input type="file" onChange={e => setState(e.target.files[0])} />
      </Container>
    </>
  )
}

export default Login
