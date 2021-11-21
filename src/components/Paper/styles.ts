import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #3f3b52;
  border-radius: 16px;
  margin: 0 auto;
  margin-bottom: 32px;
  width: 96.5%;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 5%), 0px 2px 2px 0px rgb(0 0 0 / 10%),
    0px 1px 5px 0px rgb(0 0 0 / 5%);
  @media (max-width: 576px) {
    max-width: 93%;
  }
`

export const ContainerWrapper = styled.div`
  padding: 42px;
  @media (max-width: 576px) {
    padding: 32px 22px;
  }
`
