interface PaginationProps {
  currentData: () => any[]
}

const usePagination = (
  data = [],
  itemsPerPage: number,
  currentPage: number
): PaginationProps => {
  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
    return data.slice(begin, end)
  }

  return { currentData }
}

export default usePagination
