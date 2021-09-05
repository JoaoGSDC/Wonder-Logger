import { useContext } from 'react'

import { SidebarContext } from '@contexts/SidebarContext'

import Topbar from '@components/layout/Topbar'
import Sidebar from '@components/layout/Sidebar'

import { Container, Content, Main } from './style'

const DashboardLayout: React.FC = ({ children }) => {
  const { isExpanded } = useContext(SidebarContext)

  return (
    <Container>
      <Sidebar />
      <Main>
        <Topbar />
        <Content>{children}</Content>
      </Main>
    </Container>
  )
}

export default DashboardLayout
