import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  padding: 48px;
  background: white;
  border-radius: 16px;
  margin-bottom: 32px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 5%), 0px 2px 2px 0px rgb(0 0 0 / 10%),
    0px 1px 5px 0px rgb(0 0 0 / 5%);

  @media (max-width: 993px) {
    width: 100%;
    padding: 24px;
  }

  @media (max-width: 576px) {
    padding: 8px;
  }
`
