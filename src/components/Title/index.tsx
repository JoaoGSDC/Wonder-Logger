import { useContext, useEffect } from 'react'
import Head from 'next/head'

import { SidebarContext } from '@contexts/SidebarContext'

type TitleProps = {
  title?: string
  context: string
}

const Title: React.FC<TitleProps> = ({ title, context }) => {
  const { setDashboardTitle } = useContext(SidebarContext)

  useEffect(() => {
    setDashboardTitle(context)

    return () => {
      setDashboardTitle('')
    }
  }, [])

  return (
    <Head>
      <title>
        {title && title + ' - '} {context}
      </title>
    </Head>
  )
}

export default Title
