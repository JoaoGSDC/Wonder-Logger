import { ButtonHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

import Loading from '@components/Loading'

import { Container, RemovableButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>
  loading?: boolean
  color?: 'primary' | 'secondary'
  variant?: 'contained' | 'outlined' | 'text'
  removable?: () => any
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  children,
  loading,
  removable,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {!loading ? (
        <>
          {Icon && <Icon size={16} />}
          {children}
        </>
      ) : (
        <Loading size="20px" color="white" />
      )}
      {removable && <RemovableButton onClick={removable}>x</RemovableButton>}
    </Container>
  )
}

export default Button
