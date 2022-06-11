import FormHelperText from '@mui/material/FormHelperText'
import { Controller } from 'react-hook-form'
import Select, { Props as SelectProps } from 'react-select'

import FieldContainer from '../FieldContainer'
import { generateSelectStyles, SelectLabel } from './styles'

interface SelectSimpleProps extends SelectProps {
  name: string
  label: string
  placeholder: string
  instanceId: number
  control?: any
  isDisabled?: boolean
  options?: any
  valueOnly?: boolean
}

const SelectAsync: React.FC<SelectSimpleProps> = ({
  defaultValue,
  label,
  name,
  control,
  isDisabled,
  options,
  valueOnly,
  ...rest
}) => {
  return (
    <FieldContainer>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          const error: any = fieldState.error

          return (
            <>
              <Select
                isDisabled={isDisabled}
                styles={generateSelectStyles(error)}
                value={
                  valueOnly
                    ? options?.find(c => c?.value === field?.value)
                    : field?.value
                }
                onChange={val =>
                  valueOnly ? field.onChange(val.value) : field.onChange(val)
                }
                {...(options && {
                  options,
                  defaultValue: valueOnly ? options[0]?.value : defaultValue
                })}
                {...rest}
              />
              {!!error && (
                <FormHelperText error={!!error}>
                  {error?.message}
                </FormHelperText>
              )}
            </>
          )
        }}
        {...(options && {
          defaultValue: valueOnly ? options[0]?.value : defaultValue
        })}
      />
      <SelectLabel className="selectLabel">{label}</SelectLabel>
    </FieldContainer>
  )
}

export default SelectAsync
