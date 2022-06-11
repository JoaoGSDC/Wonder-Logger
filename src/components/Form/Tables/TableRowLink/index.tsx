import { TableRowProps } from '@mui/material/TableRow'
import { useRouter } from 'next/router'

import { TableRow } from './styles'

interface TableRowLinkProps extends TableRowProps {
  link?: string
  error?: boolean | false
}

const TableRowLink: React.FC<TableRowLinkProps> = ({
  link,
  children,
  error,
  ...rest
}) => {
  const router = useRouter()

  return (
    <TableRow
      sx={{ cursor: link ? 'pointer' : 'default' }}
      onClick={() => {
        if (link) {
          router.push(link)
        }
      }}
      error={error}
      {...rest}
    >
      {children}
    </TableRow>
  )
}

export default TableRowLink
