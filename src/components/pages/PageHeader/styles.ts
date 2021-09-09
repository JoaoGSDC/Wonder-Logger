import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 32px;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 576px) {
    padding: 24px 16px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  user-select: none;
  margin-left: 4px;
`

export const ActionsContainer = styled.div``
