import React from 'react'
import { Container } from './styles'

interface IPropsDTO {
  children: unknown
}

const Card: React.FC = ({ children }: IPropsDTO) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  )
}

export default Card
