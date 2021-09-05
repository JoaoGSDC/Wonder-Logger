import styled from 'styled-components'

type UserDropdownContainerProps = {
  isVisible: boolean
}

export const Container = styled.div<UserDropdownContainerProps>`
  position: absolute;
  top: 70px;
  right: 0px;
  background: #fff;
  width: 200px;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
  border-radius: 0 0 0 8px;
`
