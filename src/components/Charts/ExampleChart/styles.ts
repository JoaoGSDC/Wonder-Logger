import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin: 32px auto;

  text-align: center;

  @media (max-width: 1366px) {
    max-width: 80%;
  }

  @media (max-width: 993px) {
    max-width: 90%;
  }

  @media (max-width: 576px) {
    max-width: 100%;
  }
`

export const ChartTitle = styled.div`
  margin-bottom: 32px;

  h1 {
    font-size: 1.05rem;
  }

  p {
    font-size: 0.9rem;
  }
`
