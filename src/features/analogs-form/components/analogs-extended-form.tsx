import React, {ChangeEvent, FC} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAnalogsForm} from "../analogs-form.selectors";
import {
  setAnalogsFormPriceInterval,
  setAnalogsFormSearchInAddress,
  setAnalogsFormSearchInDescriptions,
  setAnalogsFormSearchInTitle,
  setAnalogsFormSquareInterval
} from "../analogs-form.actions";

export const AnalogsExtendedForm: FC = () => {
  const form = useSelector(getAnalogsForm)
  const dispatch = useDispatch()

  const { searchInTitle, searchInDescription, searchInAddress, squareInterval, priceInterval } = form

  const searchInTitleHandle = (evt: ChangeEvent<HTMLInputElement>) => { dispatch(setAnalogsFormSearchInTitle(evt.target.value)) }
  const searchInDescriptionHandle = (evt: ChangeEvent<HTMLInputElement>) => { dispatch(setAnalogsFormSearchInDescriptions(evt.target.value)) }
  const searchInAddressHandle = (evt: ChangeEvent<HTMLInputElement>) => { dispatch(setAnalogsFormSearchInAddress(evt.target.value)) }
  const squareIntervalFromHandle = (evt: ChangeEvent<HTMLInputElement>) => { dispatch(setAnalogsFormSquareInterval({ from: evt.target.value, to: squareInterval.to })) }
  const squareIntervalToHandle = (evt: ChangeEvent<HTMLInputElement>) => { dispatch(setAnalogsFormSquareInterval({ from: squareInterval.from, to: evt.target.value })) }
  const priceIntervalFromHandle = (evt: ChangeEvent<HTMLInputElement>) => { dispatch(setAnalogsFormPriceInterval({ from: evt.target.value, to: priceInterval.to })) }
  const priceIntervalToHandle = (evt: ChangeEvent<HTMLInputElement>) => { dispatch(setAnalogsFormPriceInterval({ from: priceInterval.from, to: evt.target.value })) }

  return (
    <div className="announcements-extended-form">
      <div className="announcements-extended-form__item">
        <div className="announcements-extended-form__label">Поиск в заголовке</div>
        <input type="text" value={searchInTitle} onChange={searchInTitleHandle} />
      </div>
      <div className="announcements-extended-form__item">
        <div className="announcements-extended-form__label">Поиск в адресе</div>
        <input type="text" value={searchInAddress} onChange={searchInAddressHandle} />
      </div>
      <div className="announcements-extended-form__item">
        <div className="announcements-extended-form__label">Поиск в описании</div>
        <input type="text" value={searchInDescription} onChange={searchInDescriptionHandle} />
      </div>
      <div className="announcements-extended-form__item">
        <div className="announcements-extended-form__label">Поиск по площади</div>
        <div className="announcements-extended-form__row">
          от <input type="number" value={squareInterval.from} onChange={squareIntervalFromHandle} /> до <input type="number" value={squareInterval.to} onChange={squareIntervalToHandle} />
        </div>
      </div>
      <div className="announcements-extended-form__item">
        <div className="announcements-extended-form__label">Поиск по цене м²</div>
        <div className="announcements-extended-form__row">
          от <input type="number" value={priceInterval.from} onChange={priceIntervalFromHandle} /> до <input type="number" value={priceInterval.to} onChange={priceIntervalToHandle} />
        </div>
      </div>
    </div>
  )
}
