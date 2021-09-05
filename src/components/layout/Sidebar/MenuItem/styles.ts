import styled from 'styled-components'

import Theme from '@styles/theme'

const primaryColor = Theme.colors.primary

type MenuActiveProps = {
  active: boolean
  subitem?: boolean
}

export const Container = styled.div<MenuActiveProps>`
  display: flex;
  background: ${props => (props.active ? primaryColor : 'transparent')};
  align-items: flex-end;
  padding: 16px;
  cursor: pointer;
  margin: 4px 8px;
  border-radius: 12px;
  padding: ${props => (props.subitem ? '16px 4px' : '16px 11px')};
  transition: background 400ms linear;

  &:hover {
    background: ${props => (props.active ? primaryColor : ' #f5f5f5')};
  }
`

export const IconContainer = styled.div<MenuActiveProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  min-width: 36px;

  svg {
    pointer-events: none;
    color: ${props => (props.active ? '#FFFFFF' : '#707070')};
  }
`

type MenuItemLabelProps = {
  expanded: boolean
  active: boolean
}

export const LabelContainer = styled.div<MenuItemLabelProps>`
  display: block;
  color: ${props => (props.active ? '#FFFFFF' : '#707070')};
  font-size: 0.85rem;
  letter-spacing: -0.02rem;
  font-weight: 500;
  width: ${props => (props.expanded ? '100%' : '0px')};
  height: ${props => (props.expanded ? '100%' : '0px')};
  opacity: ${props => (props.expanded ? 1 : 0)};
  overflow: hidden;
  margin-left: 24px;
  white-space: nowrap;
  transition: opacity 400ms linear;
  user-select: none;
  pointer-events: none;
`
