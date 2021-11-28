import { IconBaseProps } from 'react-icons/lib'

import InputLabel from './InputLabel'
import { Container } from './styles'

type FieldContainerProps = {
  label: string
  icon?: React.ComponentType<IconBaseProps>
  type?: string
  color?: string
}

const FieldContainer: React.FC<FieldContainerProps> = ({
  label,
  icon: Icon,
  children,
  type,
  color
}) => {
  return (
    <Container type={type}>
      <InputLabel color={color}>
        {Icon && <Icon />}
        {label}
      </InputLabel>
      {children}
    </Container>
  )
}

export default FieldContainer
