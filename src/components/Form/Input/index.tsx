import { ChangeEvent, InputHTMLAttributes } from 'react'
import { Controller } from 'react-hook-form'
import { IconBaseProps } from 'react-icons/lib'

import ErrorLabel from '../ErrorLabel'
import FieldContainer from '../FieldContainer'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  type?: string
  label: string
  icon?: React.ComponentType<IconBaseProps>
  control: any
  disabled?: boolean
  defaultValue?: any
  maxValue?: number
  color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning'
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  icon,
  control,
  disabled,
  type,
  defaultValue,
  maxValue,
  color,
  ...rest
}) => {
  const parseInputNumberTypeValue = (value: string) => {
    return value.match(/^[0-9]*\.?[0-9]*$/)
  }

  const handleInputValue = (value: string | any) => {
    if (!value && value !== 0) {
      return (value = '')
    }

    return value
  }

  const handleInputOnChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (type === 'number') {
      if (maxValue) {
        const parsedValue = parseInputNumberTypeValue(value)

        if (Number(parsedValue) > maxValue) {
          return maxValue
        }
      }

      return parseInputNumberTypeValue(value)
    }

    return value
  }

  return (
    <FieldContainer label={label} color={color} icon={icon} type={type}>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          return (
            <>
              <InputContainer disabled={disabled} error={!!fieldState.error}>
                <input
                  disabled={disabled}
                  value={handleInputValue(field.value)}
                  onChange={event =>
                    field.onChange(handleInputOnChangeEvent(event))
                  }
                  type="text"
                  {...(type && { type: type === 'number' ? 'text' : type })}
                  {...rest}
                />
              </InputContainer>
              {fieldState.error && (
                <ErrorLabel>{fieldState.error?.message}</ErrorLabel>
              )}
            </>
          )
        }}
        {...(defaultValue && { defaultValue })}
      />
    </FieldContainer>
  )
}

export default Input
