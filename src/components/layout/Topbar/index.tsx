import { useContext, useState, useRef, useEffect } from 'react'
import { RiMenuFoldFill, RiMenuLine } from 'react-icons/ri'

import { SidebarContext } from '@contexts/SidebarContext'
import { AuthContext } from '@contexts/AuthContext'

import UserDropdown from './UserDropdown'
import LogoMobile from './LogoMobile'

import {
  Container,
  Wrapper,
  Box,
  Title,
  Avatar,
  Username,
  UserContainer,
  MenuItem,
  MenuText,
  MenuToggle,
  ResponsiveToggle
} from './styles'

import { showUsername } from '../../../lib/names'

import NoAvatar from '@assets/no-avatar.jpg'

const TopBar: React.FC = () => {
  const { user } = useContext(AuthContext)
  const { dashboardTitle, isExpanded, setIsExpanded } = useContext(
    SidebarContext
  )

  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false)

  const dropdownUserRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownUserRef && !dropdownUserRef.current.contains(event.target)) {
        setDropdownVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <Container>
      <Wrapper>
        <Box>
          <MenuToggle
            expanded={isExpanded}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <RiMenuFoldFill color={'#fff'} size={20} />
          </MenuToggle>
          <LogoMobile />
          <Title>{dashboardTitle}</Title>
        </Box>
        <Box>
          {user && (
            <UserContainer onClick={() => setDropdownVisible(!dropdownVisible)}>
              <Avatar
                image={
                  user.picture
                    ? process.env.NEXT_PUBLIC_API_URL + '/' + user.picture
                    : NoAvatar
                }
              />
              <Username>{showUsername(user.name, user.nickname)}</Username>
            </UserContainer>
          )}
          <ResponsiveToggle
            onClick={() => setIsExpanded(!isExpanded)}
            expanded={isExpanded}
          >
            <RiMenuLine size={24} color="#707070" />
          </ResponsiveToggle>
        </Box>
      </Wrapper>
      <UserDropdown isVisible={dropdownVisible} ref={dropdownUserRef} />
    </Container>
  )
}

export default TopBar
