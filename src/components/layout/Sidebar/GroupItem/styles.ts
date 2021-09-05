import styled from 'styled-components'

type GroupItemContainerProps = {
  isOpen: boolean
}

export const Container = styled.div<GroupItemContainerProps>`
  display: flex;
  background: ${props => (props.isOpen ? '#f6f6f6' : '#ffffff')};
  align-items: flex-end;
  cursor: pointer;
  position: relative;
  margin: 4px 8px;
  border-radius: ${props => (props.isOpen ? '12px 12px 0 0' : '12px')};
  padding: 16px 11px;

  &:hover {
    background: #f5f5f5;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  min-width: 36px;

  svg {
    pointer-events: none;
  }
`

type MenuItemLabelProps = {
  expanded: boolean
}

export const LabelContainer = styled.div<MenuItemLabelProps>`
  display: block;
  color: #707070;
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
type DropdownIconProps = {
  open: boolean
}

export const DropdownIcon = styled.div<DropdownIconProps>`
  position: absolute;
  right: 4px;
  top: 16px;

  svg {
    transform: rotate(${props => (props.open ? '180deg' : '0degw')});
    transition: transform 300ms linear;
  }
`

type SubmenuContainerProps = {
  open: boolean
}

export const SubmenuContainer = styled.div<SubmenuContainerProps>`
  height: ${props => (props.open ? 'auto' : '0')};
  opacity: ${props => (props.open ? 1 : 0)};
  overflow: hidden;
  background: #f6f6f6;
  transition: all 300ms linear;
  margin: 0 8px;
  margin-top: -4px;
  margin-bottom: 2px;
  border-radius: 0 0 12px 12px;
  /* div {
    transform: scale(0.92);
  } */
`
