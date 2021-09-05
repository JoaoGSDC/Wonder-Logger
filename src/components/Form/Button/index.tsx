import Loading from '@components/Loading'
import { ButtonHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>
  appearance?: 'primary' | 'outline-secondary'
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  children,
  appearance,
  loading,
  ...rest
}) => {
  return (
    <Container appearance={appearance} {...rest}>
      {!loading ? (
        <>
          {Icon && <Icon size={19} />}
          {children}
        </>
      ) : (
        <Loading size="20px" color="white" />
      )}
    </Container>
  )
}

export default Button
