import { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { RiAlertLine } from 'react-icons/ri'

import { Controller } from 'react-hook-form'

import { Container, InputContainer, InputLabel } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  type?: string
  label: string
  icon?: React.ComponentType<IconBaseProps>
  control: any
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  icon: Icon,
  control,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Container>
          <InputLabel>
            {Icon && <Icon />}
            {label}
          </InputLabel>
          <InputContainer>
            <input value={field.value || ''} {...field} {...rest} />
          </InputContainer>
        </Container>
      )}
    />
  )
}

export default Input
