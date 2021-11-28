import { InputLabel as Label } from './styles'

type labelProps = {
  color?: string
}

const InputLabel: React.FC<labelProps> = ({ children, color }) => {
  return <Label color={color}>{children}</Label>
}

export default InputLabel
