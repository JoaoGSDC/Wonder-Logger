import { useRef, useEffect } from 'react'
import { AsyncPaginate as Select } from 'react-select-async-paginate'
import { useField } from '@unform/core'

import { Container, InputLabel, selectStyles } from './styles'

interface SelectAsyncProps {
  name: string
  label: string
  placeholder: string
  instanceId: number
  loadOptions: any
  additional: any
}

const SelectAsync: React.FC<SelectAsyncProps> = ({ name, label, ...rest }) => {
  const selectRef = useRef(null)

  useEffect(() => {
    console.log(selectRef)
  }, [selectRef])

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        console.log(ref)
        if (!ref.state.value) {
          return ''
        }
        return ref.state.value.value
      }
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <Select
        cacheOptions
        defaultValue={defaultValue}
        defaultOptions={[{ value: null, label: 'Nenhum' }]}
        selectRef={selectRef}
        styles={selectStyles}
        {...rest}
      />
    </Container>
  )
}

export default SelectAsync
