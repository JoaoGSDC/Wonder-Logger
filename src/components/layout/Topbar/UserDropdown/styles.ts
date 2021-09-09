import styled from 'styled-components'

type UserDropdownContainerProps = {
  isVisible: boolean
}

export const Container = styled.div<UserDropdownContainerProps>`
  position: absolute;
  top: 60px;
  right: 18px;
  background: #fff;
  min-width: 120px;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
`
