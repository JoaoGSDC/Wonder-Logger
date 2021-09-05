import ReactResponsivePagination from 'react-responsive-pagination'

import { Container } from './styles'

type PaginationProps = {
  currentPage: number
  maxPage: number
  setCurrentPage: (page: number) => any
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  maxPage,
  setCurrentPage
}) => {
  return (
    <Container>
      <ReactResponsivePagination
        current={currentPage}
        total={maxPage}
        onPageChange={setCurrentPage}
      />
    </Container>
  )
}

export default Pagination
