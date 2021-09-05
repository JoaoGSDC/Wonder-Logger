import { getISOWeek, parseISO } from 'date-fns'

export const parseISODateToDayAndMonth = (isoDate: string): string => {
  const parsedDate = new Date(isoDate).toLocaleString('default', {
    day: 'numeric',
    month: '2-digit'
  })

  return parsedDate
}

export const parsedISODateToISOWeek = (isoDate: string): string => {
  const parsedDate = getISOWeek(parseISO(isoDate))

  const parsedYear = new Date(isoDate).toLocaleString('default', {
    year: '2-digit'
  })

  return String(parsedDate + '/' + parsedYear)
}

export const parseISODateToMonthAndYear = (isoDate: string): string => {
  const parsedDate = new Date(isoDate).toLocaleString('default', {
    month: 'short',
    year: '2-digit'
  })

  return parsedDate
}
