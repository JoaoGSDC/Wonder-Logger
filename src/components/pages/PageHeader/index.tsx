import { Container, TitleContainer, Title, ActionsContainer } from './styles'

type PageHeaderProps = {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <ActionsContainer>{children}</ActionsContainer>
    </Container>
  )
}

export default PageHeader
