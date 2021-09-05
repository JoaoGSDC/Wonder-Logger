import { useRouter } from 'next/router'
import { IconBaseProps } from 'react-icons/lib'
import { Container, ButtonTitle } from './styles'

type CardButtonProps = {
  icon: React.ComponentType<IconBaseProps>
  title: string
  path?: string
}

const CardButton: React.FC<CardButtonProps> = ({ icon: Icon, title, path }) => {
  const router = useRouter()

  return (
    <Container {...(path && { onClick: () => router.push(path) })}>
      {Icon && <Icon size={24} />}
      <ButtonTitle>{title}</ButtonTitle>
    </Container>
  )
}

export default CardButton
