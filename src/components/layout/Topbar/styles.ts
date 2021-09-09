import styled from 'styled-components'

import Logo from '@assets/logo.png'

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 2;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 98%;
  margin: 0 auto;
  justify-content: space-between;
`

export const LogoContainer = styled.div`
  background: url(${Logo}) no-repeat center;
  width: 50px;
  height: 35px;
  background-size: contain;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  user-select: none;
  margin-left: 24px;
  color: #707070;

  @media (max-width: 576px) {
    margin-left: 8px;
  }
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 16px;
  cursor: pointer;

  svg {
    margin-right: 16px;
  }

  &:hover {
    background: #eeeeee;
  }
`

type AvatarProps = {
  image: string
}

export const Avatar = styled.div<AvatarProps>`
  background: url(${props => props.image}) no-repeat center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-size: cover;
  margin-right: 12px;
`

export const Username = styled.span`
  display: block;
  color: #707070;
  font-size: 0.8rem;
  font-weight: 500;
  user-select: none;
  text-transform: capitalize;

  @media (max-width: 576px) {
    display: none;
  }
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 32px;
  height: 100%;
  cursor: pointer;

  &:hover {
    background: #eeeeee;
  }

  svg {
    color: #707070;
  }
`

export const MenuText = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  margin-left: 16px;
  user-select: none;
`

type MenuToggleProps = {
  expanded: boolean
}

export const MenuToggle = styled.div<MenuToggleProps>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scaleX(${props => (props.expanded ? '1' : '-1')});
  transition: transform 100ms linear;
  cursor: pointer;

  @media (max-width: 993px) {
    display: none;
  }
`

export const ResponsiveToggle = styled.div<MenuToggleProps>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scaleX(${props => (props.expanded ? '1' : '-1')});
  transition: transform 100ms linear;

  @media (min-width: 993px) {
    display: none;
  }
`
