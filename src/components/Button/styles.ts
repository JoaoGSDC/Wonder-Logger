import styled, { css } from 'styled-components'

type ButtonStyleProps = {
  color: 'primary' | 'secondary' | 'outline-primary'
}

export const Container = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lighttext};
  padding: 10px 16px;
  border-radius: 10px;
  border: 0;
  white-space: nowrap;
  font-weight: 500;
  cursor: pointer;
  user-select: none;

  svg {
    margin-right: 12px;
  }

  ${props =>
    props.color === 'outline-primary' &&
    css`
      background: white;
      border: 1px ${props => props.theme.colors.primary} solid;
      color: ${props => props.theme.colors.primary};

      &:hover {
        background: ${props => props.theme.colors.primary};
        color: white;
      }
    `}
`
