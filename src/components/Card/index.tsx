import React from 'react'
import { Container } from './styles'
import CSS from 'csstype'

interface IPropsDTO {
  style?: CSS.Properties
  children: Element[]
}

const Card: React.FC = ({ children, style = {} }: IPropsDTO) => {
  return (
    <>
      <Container style={style}>{children}</Container>
    </>
  )
}

export default Card
