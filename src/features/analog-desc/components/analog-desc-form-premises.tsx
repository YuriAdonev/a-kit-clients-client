import {FC, useState} from "react";
import {
  saveAnalogDescForm,
  setAnalogDescShowForm
} from "../analog-desc.actions";
import {useDispatch, useSelector} from "react-redux";
import {getAnalogDescForm} from "../analog-desc.selectors";

export const AnalogDescFormPremises: FC = () => {
  const { structureOfPremises } = useSelector(getAnalogDescForm)
  const dispatch = useDispatch()
  const [warm, setWarm] = useState(structureOfPremises.warm)
  const [cold, setCold] = useState(structureOfPremises.cold)
  const [officeOrTrade, setOfficeOrTrade] = useState(structureOfPremises.officeOrTrade)

  const saveFormData = (): void => {
    dispatch(saveAnalogDescForm({
      structureOfPremises: {
        warm,
        cold,
        officeOrTrade
      }
    }))
  }

  const cancelForm = (): void => {
    dispatch(setAnalogDescShowForm(false))
  }

  return (
    <>
      <div className="analog-desc-form__row">
        <div className="analog-desc-form__title">Структура помещений</div>
        <div className="analog-desc-form__list">
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">Производственно-складские холодные</div>
            <div className="analog-desc-form__value">
              <input
                type="number"
                value={cold}
                onChange={(evt) => setCold(parseFloat(evt.target.value))}
              />
            </div>
          </div>
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">Производственно-складские теплые</div>
            <div className="analog-desc-form__value">
              <input
                type="number"
                value={warm}
                onChange={(evt) => setWarm(parseFloat(evt.target.value))}
              />
            </div>
          </div>
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">Офисно-торговые</div>
            <div className="analog-desc-form__value">
              <input
                type="number"
                value={officeOrTrade}
                onChange={(evt) => setOfficeOrTrade(parseFloat(evt.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="analog-desc-form__footer">
        <button onClick={saveFormData}>Сохранить</button>
        <button onClick={cancelForm}>Отменить</button>
      </div>
    </>
  )
}
