import styled from 'styled-components'

import Logo from '@assets/logo.png'

export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 8px;

  @media (min-width: 993px) {
    display: none;
  }
`

export const LogoSmall = styled.div`
  background: url(${Logo}) no-repeat center;
  width: 45px;
  min-width: 45px;
  height: 35px;
  background-size: contain;

  @media (max-width: 576px) {
    margin-left: 8px;
  }
`

export const LogoBig = styled.div`
  background: url(${Logo}) no-repeat center;
  width: 80px;
  height: 28px;
  background-size: contain;

  @media (max-width: 576px) {
    display: none;
  }
`
