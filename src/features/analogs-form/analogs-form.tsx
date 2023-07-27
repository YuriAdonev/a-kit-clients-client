import React, {ChangeEvent, FC, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  setAnalogsFormCity,
  setAnalogsFormPurpose,
  setAnalogsFormRegion,
  setAnalogsFormType,
  setAnalogsFormShowExtendedForm,
  setAnalogsFormCategory
} from "./analogs-form.actions";
import { getAnalogsForm } from "./analogs-form.selectors";
import {AnalogsExtendedForm} from "./components/analogs-extended-form";
import {regionList} from './data/region-list'
import {fetchAnalogsList, setAnalogsSelectedList} from '../analogs/analogs.actions'
import {getAnalogsCurrentPage} from '../analogs/analogs.selectors'
import {categoryList} from './data/category-list'

export const AnalogsForm: FC = () => {
  const form = useSelector(getAnalogsForm)
  const currentPage = useSelector(getAnalogsCurrentPage)
  const dispatch = useDispatch()
  const { type, category, purpose, region, city, showExtendedForm } = form

  const [citiesList, setCitiesList] = useState(regionList.find(it => it.name === region)?.cities || [])
  const [purposesList, setPurposesList] = useState(categoryList.find(it => it.name === category)?.purposes || [])

  const getAnnouncements = () => {
    dispatch(setAnalogsSelectedList([]))
    dispatch(fetchAnalogsList(currentPage))
  }

  const toggleExtendedForm = () => {
    dispatch(setAnalogsFormShowExtendedForm(!showExtendedForm))
  }

  const changeCategory = (evt:  ChangeEvent<HTMLSelectElement>): void => {
    const currentCategory = categoryList.find(item => item.name === evt.target.value)
    if (currentCategory) {
      const purposes = currentCategory.purposes
      setPurposesList(purposes)
      dispatch(setAnalogsFormPurpose(purposes[0]))
    }
    dispatch(setAnalogsFormCategory(evt.target.value))
  }

  const changePurpose = (evt:  ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setAnalogsFormPurpose(evt.target.value))
  }

  const changeRegion = (evt:  ChangeEvent<HTMLSelectElement>): void => {
    const currentRegion = regionList.find(item => item.name === evt.target.value)
    if (currentRegion) {
      const cities = currentRegion.cities
      setCitiesList(cities)
      dispatch(setAnalogsFormCity(cities[0]))
    }
    dispatch(setAnalogsFormRegion(evt.target.value))
  }

  const changeCity = (evt:  ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setAnalogsFormCity(evt.target.value))
  }

  const changeOfferType = (evt:  ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setAnalogsFormType(evt.target.value))
  }

  return (
    <div className="analogs-forms">
      <div className="analogs-form">
        <div className="analogs-form__row">
          <div className="analogs-form__item">
            <p>Категория:</p>
            <select onChange={changeCategory} value={category}>
              {categoryList.map(it => <option value={it.name} key={it.name}>{it.name}</option>)}
              {/*<option value="Коммерческая недвижимость">Коммерческая недвижимость</option>*/}
              {/*<option value="Земельные участки">Земельные участки</option>*/}
            </select>
          </div>
        </div>
        <div className="analogs-form__row">
          <div className="analogs-form__item">
            <p>Тип объявления:</p>
            <select onChange={changeOfferType} value={type}>
              <option value="Продажа">Продажа</option>
              <option value="Аренда">Аренда</option>
              <option value="">Все</option>
            </select>
            {/*<div className="analogs-form__type tabs">*/}
            {/*  <div*/}
            {/*    className={`tabs__item${type === 'Продажа' ? ' active' : ''}`}*/}
            {/*    onClick={() => dispatch(setAnalogsFormType('Продажа'))}*/}
            {/*  >*/}
            {/*    Продажа*/}
            {/*  </div>*/}
            {/*  https://storage.yandexcloud.net/appraiser-kit/screenshots/93c14a80-3260-4d19-a76b-7b5ec37b881d.png<div*/}
            {/*    className={`tabs__item${type === 'Аренда' ? ' active' : ''}`}*/}
            {/*    onClick={() => dispatch(setAnalogsFormType('Аренда'))}*/}
            {/*  >*/}
            {/*    Аренда*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <div className="analogs-form__item">
            <p>Вид объекта:</p>
            <select onChange={changePurpose} value={purpose}>
              {
                purposesList.map(it => <option value={it} key={it}>{it}</option>)
              }
            </select>
          </div>
        </div>
        <div className="analogs-form__item">
          <p>Местоположение</p>
          <select onChange={changeRegion} value={region}>
            {regionList.map(it => <option value={it.name} key={it.name}>{it.name}</option>)}
          </select>
          <select onChange={changeCity} value={city ? city : ''}>
            {
              citiesList.map(it => <option value={it} key={it}>{it}</option>)
            }
            <option value="">Прочее</option>
          </select>
        </div>
        <button onClick={getAnnouncements}>Найти</button>
        <button onClick={toggleExtendedForm}>{showExtendedForm ? 'Скрыть расширенный поиск' : 'Показать расширенный поиск'}</button>
      </div>
      { showExtendedForm ? <AnalogsExtendedForm /> : null }
    </div>
  )
}
