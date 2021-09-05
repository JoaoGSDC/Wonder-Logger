import {
  InputHTMLAttributes,
  useRef,
  useState,
  useEffect,
  useCallback
} from 'react'
import { useField } from '@unform/core'
import { IconBaseProps } from 'react-icons/lib'
import { RiAlertLine } from 'react-icons/ri'

import { Container, InputContainer, InputLabel, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  type?: string
  label: string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ name, label, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <InputLabel>
        {Icon && <Icon />}
        {label}
      </InputLabel>
      <InputContainer
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </InputContainer>
      {error && (
        <Error title={error}>
          <RiAlertLine color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  )
}

export default Input
