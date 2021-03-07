import { parseISO, format } from 'date-fns'

const Date = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyy')}</time>
}

export default Date
