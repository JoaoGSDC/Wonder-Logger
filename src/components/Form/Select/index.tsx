import { forwardRef, useRef } from 'react'
import { Controller } from 'react-hook-form'
import { IconBaseProps } from 'react-icons'
import ReactSelect from 'react-select'

import { Container, InputLabel, selectStyles } from './styles'

type SelectProps = {
  name: string
  options: any
  control: any
  icon?: React.ComponentType<IconBaseProps>
  label: string
  placeholder?: string
  disableSearch?: boolean
}

const Select: React.ForwardRefRenderFunction<any, SelectProps> = (
  { name, options, control, icon: Icon, label, placeholder, disableSearch },
  _
) => {
  const selectRef = useRef(null)

  return (
    <Container>
      <InputLabel>
        {Icon && <Icon />}
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          return (
            <ReactSelect
              styles={selectStyles}
              ref={selectRef}
              instanceId={200}
              options={options}
              {...(placeholder && { placeholder })}
              {...(disableSearch && { isSearchable: false })}
              {...field}
            />
          )
        }}
      />
    </Container>
  )
}

export default forwardRef(Select)
