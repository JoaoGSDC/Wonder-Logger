import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableSortLabel from '@mui/material/TableSortLabel'
import Typography, {
  TypographyProps as MUITypographyProps
} from '@mui/material/Typography'

import {
  TableContainer,
  TableHead,
  TableFooter,
  TableRowList,
  TableCell,
  TableRow
} from './styles'

const TableText: React.FC<any> = ({ highlighted, head, children, ...rest }) => {
  return (
    <Typography
      {...rest}
      sx={{
        color: 'rgb(37, 54, 33)',
        lineHeight: '1.5rem',
        fontSize: '0.875rem',
        fontFamily: 'Public Sans, sans-serif',
        ...((highlighted || head) && { fontWeight: 700 })
      }}
    >
      {children}
    </Typography>
  )
}

export {
  Table,
  TableBody,
  TableCell,
  TableRowList,
  TableContainer,
  TableHead,
  TableFooter,
  TableRow,
  TableSortLabel,
  TableText
}
