import { Container, ContainerWrapper } from './styles'

type PaperProps = {
  header?: React.Component | any
  style?: any
}

const Paper: React.FC<PaperProps> = ({ children, header, ...rest }) => {
  return (
    <Container {...rest}>
      {header}
      <ContainerWrapper>{children}</ContainerWrapper>
    </Container>
  )
}

export default Paper
