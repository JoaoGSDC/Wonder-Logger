import styled, { css } from 'styled-components'
import { shade } from 'polished'

import Theme from '@styles/theme'

const primaryColor = Theme.colors.primary
const secondaryColor = Theme.colors.secondary

type FormButtonProps = {
  appearance: 'primary' | 'outline-secondary'
}

export const Container = styled.button<FormButtonProps>`
  background: ${props => props.theme.colors.primary};
  color: white;
  width: 100%;
  height: 44px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 24px;
  padding: 8px 16px;
  align-items: center;
  cursor: pointer;
  transition: background 400ms linear;
  user-select: none;
  outline: none;
  border: 0;

  svg {
    margin-right: 8px;
  }

  &:hover {
    background: ${shade(0.2, `${primaryColor}`)};
  }

  ${props =>
    props.appearance === 'outline-secondary' &&
    css`
      background: white;
      color: ${props => props.theme.colors.secondary};
      font-weight: 500;
      border-radius: 10px;

      &:hover {
        background: ${secondaryColor};
        color: white;
      }
    `}

  &:disabled {
    background: #707070;
    color: white;

    ${props =>
      props.appearance === 'outline-secondary' &&
      css`
        background: white;
        color: #707070;
      `}
  }
`
