import { useContext } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { useRouter } from 'next/router'

import { SidebarContext } from '@contexts/SidebarContext'

import { Container, IconContainer, LabelContainer } from './styles'

type MenuItemProps = {
  icon: React.ComponentType<IconBaseProps>
  path: string
  label: string
  subitem?: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon: Icon,
  path,
  label,
  subitem
}) => {
  const router = useRouter()

  const { isExpanded } = useContext(SidebarContext)

  const isSamePath = () => {
    if (router.pathname.includes('/gerenciamento')) {
      return path.includes('/gerenciamento')
    }

    if (path !== '/') {
      return router.pathname.includes(path)
    }

    return router.pathname === path
  }

  return (
    <Container
      onClick={() => router.push(path)}
      active={isSamePath()}
      subitem={subitem}
    >
      {Icon && (
        <IconContainer active={isSamePath()}>
          <Icon size={22} />
        </IconContainer>
      )}
      <LabelContainer expanded={isExpanded} active={isSamePath()}>
        <span>{label}</span>
      </LabelContainer>
    </Container>
  )
}

export default MenuItem
