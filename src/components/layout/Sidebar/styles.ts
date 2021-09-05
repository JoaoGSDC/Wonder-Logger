import styled from 'styled-components'

import Logo from '@assets/logo.png'
import LogoMEG from '@assets/logo-meg-tv.png'

type SidebarContainerProps = {
  expanded: boolean
}

export const Container = styled.aside<SidebarContainerProps>`
  width: ${props => (props.expanded ? '300px' : '80px')};
  height: 100vh;
  background: white;
  transition: width 300ms ease-in-out;
  overflow-x: auto;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;

  @media (max-width: 993px) {
    position: fixed;
    z-index: 3;
    right: ${props => (props.expanded ? '0' : '-100%')};
    transition: all 300ms ease-in-out;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const SidebarHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`

export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 993px) {
    display: none;
  }
`

export const LogoSmall = styled.div`
  background: url(${Logo}) no-repeat center;
  width: 45px;
  min-width: 45px;
  height: 35px;
  background-size: contain;
`

type LogoBigProps = {
  expanded: boolean
}

export const LogoBig = styled.div<LogoBigProps>`
  background: url(${LogoMEG}) no-repeat center;
  width: ${props => (props.expanded ? '90px' : '0')};
  height: 24px;
  background-size: contain;
  opacity: ${props => (props.expanded ? '1' : '0')};
  transition: ${props =>
    props.expanded
      ? 'width 100ms linear, opacity 400ms linear'
      : 'width 400ms linear, opacity 100ms linear'};
`

export const SidebarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`
