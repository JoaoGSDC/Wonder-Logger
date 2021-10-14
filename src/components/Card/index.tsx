import React from 'react'
import { Container } from './styles'

interface IPropsDTO {
  style?: any
  children: unknown
}

const Card: React.FC = ({ children, style = {} }: IPropsDTO) => {
  return (
    <>
      <Container style={style}>{children}</Container>
    </>
  )
}

export default Card
