import Title from '@components/Title'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

const Dashboard: React.FC = () => {
  return (
    <>
      <Title context="Início" />

      <div></div>
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
