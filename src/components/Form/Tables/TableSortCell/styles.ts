import MUITableCell from '@mui/material/TableCell'
import MUITypography from '@mui/material/Typography'
import { darken } from 'polished'
import styled from 'styled-components'

export const Typography = styled(MUITypography)`
  color: #000;
  font-weight: 600;
`

export const TableCell = styled(MUITableCell)``

export const TableCellContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;

  cursor: pointer;
  user-select: none;

  svg {
    margin-left: 8px;
  }
`
