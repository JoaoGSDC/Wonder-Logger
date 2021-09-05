import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  background: #f2f2f2;
  height: 44px;
  width: 50%;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    outline: none;
    font-size: 0.8rem;
    user-select: none;
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 100%;
`
