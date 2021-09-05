import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 32px auto;

  text-align: center;

  @media (max-width: 1366px) {
    max-width: 100%;
  }

  @media (max-width: 993px) {
    max-width: 100%;
  }

  @media (max-width: 576px) {
    max-width: 100%;
  }
`

export const ChartTitle = styled.div`
  margin-bottom: 32px;

  h1 {
    font-size: 1rem;
    font-weight: 500;
  }

  p {
    font-size: 0.85rem;
  }
`
