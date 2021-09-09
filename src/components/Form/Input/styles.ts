import styled from 'styled-components'

import Tooltip from '../Tooltip'

export const Container = styled.div`
  &:not(:first-child) {
    margin-top: 24px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  background: #eaeaea;
  margin: 12px 0;
  height: 44px;
  border-radius: 10px;
  padding: 0 16px;

  input {
    flex: 1;
    background: transparent;
    outline: none;
    border: 0;

    &:disabled {
      color: #ccc;
    }

    &::placeholder {
      color: #bababa;
      user-select: none;
    }

    &::-webkit-autofill {
      background: #eaeaea;
    }
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0 1000px #eaeaea inset !important;
    -webkit-box-shadow: 0 0 0 1000px #eaeaea inset !important;
  }
`

export const InputLabel = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
  user-select: none;

  svg {
    margin-right: 8px;
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`
