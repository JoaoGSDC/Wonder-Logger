import { useContext, forwardRef, useRef } from 'react'
import { RiLogoutBoxRLine } from 'react-icons/ri'

import { AuthContext } from '@contexts/AuthContext'

import DropdownItem from './DropdownItem'

import { Container } from './styles'

type UserDropdownProps = {
  isVisible: boolean
  ref: any
}

const UserDropdown: React.ForwardRefRenderFunction<any, UserDropdownProps> = (
  { isVisible },
  ref
) => {
  const { signOut } = useContext(AuthContext)

  return (
    <Container ref={ref} isVisible={isVisible}>
      <DropdownItem
        action={() => signOut()}
        icon={RiLogoutBoxRLine}
        title="Sair"
      />
    </Container>
  )
}

export default forwardRef(UserDropdown)
