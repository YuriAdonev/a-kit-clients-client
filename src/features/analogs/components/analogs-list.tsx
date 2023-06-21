import React, {FC} from 'react'
import {Analog} from "./analog";
import {useDispatch, useSelector} from "react-redux";
import {
  getAnalogsCount,
  getAnalogsCurrentPage,
  getAnalogsIsLoading,
  getAnalogsList,
  getAnalogsSelectedList
} from '../analogs.selectors'
import {Spinner} from "../../../components/spinner";
import {getCompilationItemList} from "../../compilation-item/compilation-item.selectors";
import {getAnalogsForm} from "../../analogs-form/analogs-form.selectors";
import {addAnalogsToSelectedList, fetchAnalogsList, setAnalogsCurrentPage} from '../analogs.actions'
import {AnalogsSort} from "./analogs-sort";
import {Pagination} from '../../../components/pagination/pagination'

export const AnalogsList: FC = () => {
  const isLoading = useSelector(getAnalogsIsLoading)
  const selectedList = useSelector(getAnalogsSelectedList)
  const compilationList = useSelector(getCompilationItemList)
  const count = useSelector(getAnalogsCount)
  const currentPage = useSelector(getAnalogsCurrentPage)
  const list = useSelector(getAnalogsList)
  const dispatch = useDispatch()

  if (count === null) {
    return (
      <div className="analogs__empty">
        Начните поиск
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="analogs__loading">
        <Spinner />
      </div>
    )
  }

  if (list.length < 1) {
    return (
      <div className="analogs__empty">
        Объявления не найдены
      </div>
    )
  }

  const onSelectItem = (id: string) => {
    dispatch(addAnalogsToSelectedList(id))
  }

  const onPageChange = (page: number) => {
    dispatch(setAnalogsCurrentPage(page))
    dispatch(fetchAnalogsList(page))
  }

  return (
    <>
      {list.length > 0 && !isLoading ? <AnalogsSort /> : null}
      <div className="analogs-list">
        { list.map(item => {
          let isInCompilation = false
          const existItem = compilationList.find(it => it.id === item.id)
          if (existItem) {
            isInCompilation = true
          }
          return (
            <Analog
              isSelected={selectedList.includes(item.id)}
              item={item}
              isInCompilation={isInCompilation}
              onSelectItem={onSelectItem}
              key={item.id}
            />
          )
        }) }
      </div>
      {count > 25
        ? <Pagination currentPage={currentPage} count={count} onPageChange={onPageChange} />
        : null
      }
    </>
  )
}
