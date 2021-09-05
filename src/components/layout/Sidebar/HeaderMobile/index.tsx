import { SidebarContext } from '@contexts/SidebarContext'
import { useContext } from 'react'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'

import { Container, HeaderTitle, CloseButton } from './styles'

const HeaderMobile: React.FC = () => {
  const { isExpanded, setIsExpanded } = useContext(SidebarContext)

  return (
    <Container>
      <RiMenuLine size={24} color="#707070" />
      <HeaderTitle>Menu</HeaderTitle>
      <CloseButton onClick={() => setIsExpanded(!isExpanded)}>
        <RiCloseLine size={28} color="#707070" />
      </CloseButton>
    </Container>
  )
}

export default HeaderMobile
