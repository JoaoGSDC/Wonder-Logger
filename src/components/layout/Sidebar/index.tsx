import { useContext } from 'react'
import {
  RiHome3Line,
  RiTeamLine,
  RiDraftLine,
  RiLineChartLine,
  RiSurveyLine,
  RiSettings4Line
} from 'react-icons/ri'
import SweetAlert from 'sweetalert2'

import { SidebarContext } from '@contexts/SidebarContext'

import MenuItem from './MenuItem'
import GroupItem from './GroupItem'

import {
  Container,
  LogoContainer,
  LogoSmall,
  LogoBig,
  SidebarHeader,
  SidebarMenuContainer
} from './styles'
import HeaderMobile from './HeaderMobile'

const Sidebar: React.FC = () => {
  const { isExpanded } = useContext(SidebarContext)

  return (
    <Container expanded={isExpanded}>
      <SidebarHeader>
        <LogoContainer>
          <LogoSmall />
          <LogoBig expanded={isExpanded} />
        </LogoContainer>
        <HeaderMobile />
      </SidebarHeader>
      <SidebarMenuContainer>
        <MenuItem label="Início" path="/" icon={RiHome3Line} />
        <MenuItem label="Minha UGB" path="/ugb" icon={RiTeamLine} />
        <MenuItem label="Avaliações" path="/evaluations" icon={RiDraftLine} />
        <MenuItem
          label="Indicadores"
          path="/indicadores"
          icon={RiLineChartLine}
        />
        <GroupItem label="Resultados" path="/resultados" icon={RiSurveyLine}>
          <MenuItem
            label="Indicadores"
            path="/indicadores"
            icon={RiLineChartLine}
            subitem
          ></MenuItem>
        </GroupItem>
        <MenuItem
          label="Gerenciamento"
          path="/gerenciamento"
          icon={RiSettings4Line}
        ></MenuItem>
      </SidebarMenuContainer>
    </Container>
  )
}

export default Sidebar
