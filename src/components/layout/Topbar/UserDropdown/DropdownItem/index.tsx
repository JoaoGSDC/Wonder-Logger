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
      <span>{title}</span>
      {Icon && <Icon />}
    </Container>
  )
}

export default DropdownItem
