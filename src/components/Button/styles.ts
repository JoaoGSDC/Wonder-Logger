import { shade, transparentize } from 'polished'
import styled, { css } from 'styled-components'

type FormButtonStyleProps = {
  color?: 'primary' | 'secondary'
  variant?: 'contained' | 'outlined' | 'text'
}

export const Container = styled.button<FormButtonStyleProps>`
  background: #3f3b52;
  display: inline-flex;
  height: 44px;
  border-radius: 10px !important;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 8px 16px;
  align-items: center;
  cursor: pointer;
  transition: background 400ms linear;
  user-select: none;
  outline: none;
  border: 0;
  align-items: center;
  justify-content: center;
  text-transform: none !important;
  white-space: nowrap;
  position: relative;
  ${props =>
    props.color === 'primary' &&
    css`
      color: ${props.theme.palette.primary.main};
      &:hover {
        background: ${transparentize(0.8, props.theme.palette.primary.main)};
      }
    `}
  ${props =>
    props.color === 'secondary' &&
    css`
      color: ${props.theme.palette.secondary.main};
      &:hover {
        background: ${transparentize(0.8, props.theme.palette.secondary.main)};
      }
    `}
  svg {
    margin-right: 8px;
  }
  ${props =>
    props.variant === 'contained' &&
    css`
      ${props.color === 'primary' &&
      css`
        & {
          background: ${props.theme.palette.primary.main};
          color: white;
          svg {
            color: white;
          }
          &:hover {
            background: ${shade(0.2, props.theme.palette.primary.main)};
          }
        }
      `}
      ${props.color === 'secondary' &&
      css`
        & {
          background: ${props.theme.palette.secondary.main};
          color: white;
          svg {
            color: white;
          }
          &:hover {
            background: ${shade(0.2, props.theme.palette.secondary.main)};
          }
        }
      `}
    `}
  ${props =>
    props.variant === 'text' &&
    css`
      ${props.color === 'primary' &&
      css`
        & {
          background: ${props.theme.palette.primary.main};
          color: white;
          svg {
            color: white;
          }
          &:hover {
            background: ${shade(0.2, props.theme.palette.primary.main)};
          }
        }
      `}
      ${props.color === 'secondary' &&
      css`
        & {
          background: ${props.theme.palette.secondary.main};
          color: white;
          svg {
            color: white;
          }
          &:hover {
            background: ${shade(0.2, props.theme.palette.secondary.main)};
          }
        }
      `}
    `}
  @media(min-width: 414px) {
    &:not(:first-child) {
      margin-left: 16px;
    }
  }
`

export const RemovableButton = styled.div`
  width: 20px;
  height: 20px;
  background: #f00;
  color: white;
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -8px;
  right: -8px;
`
