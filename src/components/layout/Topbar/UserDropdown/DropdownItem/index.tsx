import { IconBaseProps } from 'react-icons'

import { Container } from './styles'

interface DropdownItemProps {
  icon: React.ComponentType<IconBaseProps>
  title: string
  action: any
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  icon: Icon,
  title,
  action
}) => {
  return (
    <Container onClick={action}>
      {Icon && <Icon />}
      <span>{title}</span>
    </Container>
  )
}

export default DropdownItem
