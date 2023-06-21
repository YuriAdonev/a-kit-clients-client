import {FC} from 'react'
import {useDispatch} from 'react-redux'
import {setAnalogsCurrentPage} from '../../features/analogs/analogs.actions'

type PropsType = {
  currentPage: number
  count: number
  onPageChange: (page: number) => void
}

export const Pagination: FC<PropsType> = ({ currentPage, count, onPageChange }) => {
  const dispatch = useDispatch()
  const pageCount = Math.ceil(count / 25)

  const pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return (
    <div className="pagination">
      <div className="pagination__list">
        {pages.map(item => (
          <div
            key={item}
            className={`pagination__item${item === currentPage ? ' active' : ''}`}
            onClick={() => onPageChange(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="pagination__count">Всего объявлений: {count}</div>
    </div>
  )
}
