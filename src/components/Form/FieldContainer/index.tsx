import { FormControlProps as MUIFormControlProps } from '@mui/material/FormControl'

import { Container } from './styles'
interface FieldContainerProps extends MUIFormControlProps {
  type?: string
  label?: string
  icon?: any
  noMargin?: boolean
}

const FieldContainer: React.FC<FieldContainerProps> = ({
  children,
  type,
  noMargin,
  sx,
  ...rest
}) => {
  return (
    <Container
      {...rest}
      sx={{
        display: 'flex',
        ...(!noMargin && {
          marginBottom: '42px !important',
          '&:first-of-type': {
            marginTop: '18px'
          }
        }),
        ...sx
      }}
      fullWidth
      type={type}
    >
      {children}
    </Container>
  )
}

export default FieldContainer
