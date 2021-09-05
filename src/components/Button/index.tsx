import { IconBaseProps } from 'react-icons/lib'

import { Container } from './styles'

type ButtonProps = {
  label: string
  color?: 'primary' | 'secondary' | 'outline-primary'
  icon: React.ComponentType<IconBaseProps>
  onClick?: () => any
}

const Button: React.FC<ButtonProps> = ({
  label,
  color,
  icon: Icon,
  onClick
}) => {
  return (
    <Container onClick={onClick} color={color}>
      {Icon && <Icon size={18} />}
      {label}
    </Container>
  )
}

export default Button
