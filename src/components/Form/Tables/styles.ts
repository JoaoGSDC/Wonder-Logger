import MUITableCell from '@mui/material/TableCell'
import MUITableContainer from '@mui/material/TableContainer'
import MUITableFooter from '@mui/material/TableFooter'
import MUITableHead from '@mui/material/TableHead'
import MUITableRow from '@mui/material/TableRow'
import styled from 'styled-components'

export const TableContainer = styled(MUITableContainer)``

export const TableHead = styled(MUITableHead)`
  height: 56px;
  background-color: #2e2b3e !important;
  color: white;

  th {
    border-bottom: 0 !important;
  }

  th:first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  th:last-of-type {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`
export const TableFooter = styled(MUITableFooter)`
  background-color: rgb(243 243 243);
`

export const TableRowList = styled(MUITableRow)`
  td,
  th {
    height: 56px;
    border-bottom: 1px solid rgba(224, 224, 224, 0.5);
  }
`

export const TableHeadRounded = styled(MUITableHead)`
  height: 56px;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    background: white !important;
  }

  th:first-of-type {
    border-top-left-radius: 12px;
  }
  th:last-of-type {
    border-top-right-radius: 12px;
  }
  th:first-of-type {
    border-bottom-left-radius: 12px;
  }
  th:last-of-type {
    border-bottom-right-radius: 12px;
  }
`

export const TableCell = styled(MUITableCell)`
  color: white !important;
  white-space: nowrap;
`

export const TableRow = styled(MUITableRow)`
  &:last-of-type td {
    border: 0;
  }
`
