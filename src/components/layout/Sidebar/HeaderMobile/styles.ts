import styled from 'styled-components'

import Logo from '@assets/logo.png'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 4px;
  position: relative;

  @media (min-width: 993px) {
    display: none;
  }
`

export const HeaderTitle = styled.span`
  font-size: 1rem;
  color: #707070;
  margin-left: 32px;
  font-weight: 600;
`

export const CloseButton = styled.div`
  position: absolute;
  right: 6px;
  top: 6px;
`
