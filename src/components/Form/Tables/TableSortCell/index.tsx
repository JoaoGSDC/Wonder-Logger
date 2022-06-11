import TableCell from '@mui/material/TableCell'
import {
  TiArrowUnsorted,
  TiArrowSortedDown,
  TiArrowSortedUp
} from 'react-icons/ti'

import { TableCellContainer, Typography } from './styles'

type TableSortCellProps = {
  label: string
  identifier?: string
  states?: {
    sortBy: string
    orderBy: string
    setOrderBy?: any
    setSortBy?: any
  }
}

const TableSortCell: React.FC<TableSortCellProps> = ({
  states,
  identifier,
  label
}) => {
  const { sortBy, orderBy, setSortBy, setOrderBy } = states

  const handleSorting = () => {
    if (sortBy === identifier) {
      setOrderBy(orderBy === 'ASC' ? 'DESC' : 'ASC')
    }

    if (sortBy !== identifier) {
      setOrderBy('ASC')
    }

    setSortBy(identifier)
  }

  return (
    <TableCell
      onClick={() => handleSorting()}
      sx={{
        border: 0,
        overflow: 'hidden',
        '&:first-of-type': {
          borderRadius: '4px'
        }
      }}
    >
      <TableCellContainer>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <Typography sx={{ fontSize: 13.5, fontWeight: 500 }}>
            {label}
          </Typography>
          {sortBy === identifier &&
            (orderBy === 'ASC' ? (
              <TiArrowSortedDown size={14} color="#52b032" />
            ) : (
              <TiArrowSortedUp size={14} color="#52b032" />
            ))}
          {sortBy !== identifier && (
            <TiArrowUnsorted size={14} color="rgba(0,0,0,0.2)" />
          )}
        </div>
      </TableCellContainer>
    </TableCell>
  )
}

export default TableSortCell
