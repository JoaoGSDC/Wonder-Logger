import { IconBaseProps } from 'react-icons/lib'

import InputLabel from './InputLabel'
import { Container } from './styles'

type FieldContainerProps = {
  label: string
  icon?: React.ComponentType<IconBaseProps>
  type?: string
}

const FieldContainer: React.FC<FieldContainerProps> = ({
  label,
  icon: Icon,
  children,
  type
}) => {
  return (
    <Container type={type}>
      <InputLabel>
        {Icon && <Icon />}
        {label}
      </InputLabel>
      {children}
    </Container>
  )
}

export default FieldContainer
