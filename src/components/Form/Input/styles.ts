import styled, { css } from 'styled-components'

type InputContainerStyleProps = {
  disabled?: boolean
  error?: boolean
}

export const InputContainer = styled.div<InputContainerStyleProps>`
  display: flex;
  width: 100%;
  border-radius: 10px;
  height: 44px;
  background: #e5e5e5;
  border: 1px solid trasparent;
  outline: 0;
  input {
    flex: 1;
    background: transparent;
    font-size: 0.85rem;
    border-radius: 10px;
    border: 0;
    outline: 0;
    padding: 0 20px;
    &:focus {
      border-radius: 10px;
    }
    &::placeholder {
      color: #bbb;
    }
  }
  ${props =>
    props.error &&
    css`
      & {
        border: 1px solid #d32f2f !important;
      }
    `};
  ${props =>
    props.disabled &&
    css`
      opacity: 0.7;
    `};
  /* fieldset {
    &:not(:focus) {
      border-color: transparent !important;
    }
  }
  &.Mui-focused {
    fieldset {
      border-color: #52b032 !important;
    }
  }
  &.Mui-error {
    fieldset {
      border-color: #d32f2f !important;
    }
  }
  ${props =>
    props.disabled &&
    css`
      opacity: 0.7;
      fieldset {
        border-color: transparent !important;
      }
    `} */
`

export const InputLabel = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.9rem;
  user-select: none;
  margin-bottom: 10px;
  color: ${props => props.theme.palette.text.primary};
  svg {
    margin-right: 8px;
  }
`