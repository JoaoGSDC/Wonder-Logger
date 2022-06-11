import AdapterDateFns from '@mui/lab/AdapterDateFns'
import MUIDateRangePicker, {
  DateRangePickerProps as MUIDateRangePickerProps
} from '@mui/lab/DateRangePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import ptBR from 'date-fns/locale/pt-BR'
import { Controller } from 'react-hook-form'

type DateRangePickerProps = {
  name: string
  control: any
  onChange?: any
  value?: any
  renderInput?: any
  sx: any
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  name,
  control,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <FormControl style={{ width: '100%' }}>
            <LocalizationProvider locale={ptBR} dateAdapter={AdapterDateFns}>
              <MUIDateRangePicker
                calendars={3}
                startText="De"
                endText="Até"
                value={field.value || [new Date(), new Date()]}
                onChange={field.onChange}
                renderInput={(startProps, endProps) => {
                  return (
                    <>
                      <TextField
                        fullWidth
                        sx={{
                          input: {
                            backgroundColor: 'white',
                            border: '1px solid #2e2b3e',
                            borderRadius: '16px'
                          },
                          '& .MuiOutlinedInput-root': {
                            '& > fieldset': { borderRadius: '16px' }
                          }
                        }}
                        InputLabelProps={{
                          style: {
                            color: !field.value[0] ? '#2e2b3e' : '#fff',
                            top: '-15px',
                            fontWeight: 500,
                            fontSize: 20,
                            borderRadius: 10
                          }
                        }}
                        {...startProps}
                        autoComplete="off"
                      />
                      <Box sx={{ mx: 2, color: 'white' }}> - </Box>
                      <TextField
                        sx={{
                          input: {
                            backgroundColor: 'white',
                            border: '1px solid #2e2b3e',
                            borderRadius: '16px'
                          },
                          '& .MuiOutlinedInput-root': {
                            '& > fieldset': { borderRadius: '16px' }
                          }
                        }}
                        InputLabelProps={{
                          style: {
                            color: !field.value[1] ? '#2e2b3e' : '#fff',
                            top: '-15px',
                            fontWeight: 500,
                            fontSize: 20
                          }
                        }}
                        inputProps={{ color: 'white !important' }}
                        {...endProps}
                        fullWidth
                        autoComplete="off"
                      />
                    </>
                  )
                }}
                {...rest}
              />
            </LocalizationProvider>
            {fieldState.error && (
              <FormHelperText error={true}>
                {fieldState.error.message}
              </FormHelperText>
            )}
          </FormControl>
        )
      }}
    />
  )
}
