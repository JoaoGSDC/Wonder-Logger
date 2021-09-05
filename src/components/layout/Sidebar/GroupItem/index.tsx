import { useContext, useState } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useRouter } from 'next/router'

import { SidebarContext } from '@contexts/SidebarContext'

import {
  Container,
  IconContainer,
  LabelContainer,
  DropdownIcon,
  SubmenuContainer
} from './styles'

type MenuItemProps = {
  icon: React.ComponentType<IconBaseProps>
  label: string
  path: string
}

const GroupItem: React.FC<MenuItemProps> = ({
  icon: Icon,
  path,
  label,
  children
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()

  const { isExpanded } = useContext(SidebarContext)

  const isSamePath = router.pathname === path

  return (
    <>
      <Container isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {Icon && (
          <IconContainer>
            <Icon size={22} color={isSamePath ? '#52b032' : '#707070'} />
          </IconContainer>
        )}
        <LabelContainer expanded={isExpanded}>
          <span>{label}</span>
        </LabelContainer>
        <DropdownIcon open={isOpen}>
          <RiArrowDropDownLine size={22} color="#52b032" />
        </DropdownIcon>
      </Container>
      <SubmenuContainer open={isOpen}>{children}</SubmenuContainer>
    </>
  )
}

export default GroupItem
