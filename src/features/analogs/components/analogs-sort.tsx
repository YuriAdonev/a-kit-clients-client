import React, { FC, useState } from 'react'
import {IconChecked} from "../../../components/icons/icon-checked";
import {useDispatch, useSelector} from "react-redux";
import {getAnalogsList, getAnalogsSelectedList} from "../analogs.selectors";
import {setAnalogsList, setAnalogsSelectedList} from "../analogs.actions";

export const AnalogsSort: FC = () => {
  const selectedList = useSelector(getAnalogsSelectedList)
  const announcementList = useSelector(getAnalogsList)
  const dispatch = useDispatch()

  const [allSelected, setAllSelected] = useState(false)
  const [currentSort, setCurrentSort] = useState('')
  const [priceSortDirectionUp, setPriceSortDirectionUp] = useState(false)
  const [areaSortDirectionUp, setAreaSortDirectionUp] = useState(false)

  const changeAllSelected = () => {
    if (selectedList.length === announcementList.length) {
      dispatch(setAnalogsSelectedList([]))
    } else if (selectedList.length < 1 || selectedList.length < announcementList.length) {
      dispatch(setAnalogsSelectedList(announcementList.map(item => item.id)))
    }
    setAllSelected(prevState => !prevState)
  }

  const sortByPrice = () => {
    setCurrentSort('price')
    setPriceSortDirectionUp(prevState => !prevState)
    const sortedList = [...announcementList].sort(function(a, b){
      return priceSortDirectionUp ? b.pricePerMeter - a.pricePerMeter : a.pricePerMeter - b.pricePerMeter
    })
    dispatch(setAnalogsList(sortedList))
  }

  const sortByArea = () => {
    setCurrentSort('area')
    setAreaSortDirectionUp(prevState => !prevState)
    const sortedList = [...announcementList].sort(function(a, b){
      return areaSortDirectionUp ? b.area - a.area : a.area - b.area
    })
    dispatch(setAnalogsList(sortedList))
  }

  return (
    <div className="analogs-filter">
      {/*<div className={`analogs-filter__select-all${allSelected ? ' checked' : ''}`} onClick={changeAllSelected}>*/}
      {/*  <span>*/}
      {/*    { allSelected*/}
      {/*      ? <IconChecked />*/}
      {/*      : null*/}
      {/*    }*/}
      {/*  </span>*/}
      {/*  <div>Выбрать все</div>*/}
      {/*</div>*/}
      <div className="analogs-filter-sort">
        <div className="analogs-filter-sort__title">Сортировать:</div>
        <div className="analogs-filter-sort__list">
          <div
            className={`analogs-filter-sort__item${currentSort === 'price' ? ' active' : ''}`}
            onClick={sortByPrice}
          >
            <div className="analogs-filter-sort__name">по цене</div>
            <div
              className={`analogs-filter-sort__direction${currentSort === 'price' ? priceSortDirectionUp ? ' up' : ' down' : ''}`}
            ><span/><span/></div>
          </div>
          <div
            className={`analogs-filter-sort__item${currentSort === 'area' ? ' active' : ''}`}
            onClick={sortByArea}
          >
            <div className="analogs-filter-sort__name">по площади</div>
            <div
              className={`analogs-filter-sort__direction${currentSort === 'area' ? areaSortDirectionUp ? ' up' : ' down' : ''}`}
            ><span/><span/></div>
          </div>
        </div>
      </div>
    </div>
  )
}
