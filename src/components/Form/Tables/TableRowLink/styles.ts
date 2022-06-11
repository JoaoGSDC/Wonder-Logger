import MUITableRow from '@mui/material/TableRow'
import { transparentize } from 'polished'
import styled from 'styled-components'

type TableRowProps = {
  error?: boolean | false
}

export const TableRow = styled(MUITableRow)<TableRowProps>`
  transition: all 600ms linear;

  &:hover {
    background: ${({ theme }) =>
      transparentize(0.95, theme.palette.primary.main)};
  }

  &:last-of-type td,
  &:last-of-type th {
    border: 0;
  }

  td,
  th {
    height: 56px;
    border-bottom: 1px solid rgba(224, 224, 224, 0.5);
  }
`
