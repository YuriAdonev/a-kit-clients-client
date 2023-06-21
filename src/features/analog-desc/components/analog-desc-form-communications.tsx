import {FC, useState} from "react";
import {
  saveAnalogDescForm,
  setAnalogDescShowForm
} from "../analog-desc.actions";
import {useDispatch, useSelector} from "react-redux";
import {getAnalogDescForm} from "../analog-desc.selectors";

export const AnalogDescFormCommunications: FC = () => {
  const { communications } = useSelector(getAnalogDescForm)
  const dispatch = useDispatch()
  const [heating, setHeating] = useState(communications.heating)
  const [sewerage, setSewerage] = useState(communications.sewerage)
  const [electricitySupply, setElectricitySupply] = useState(communications.electricitySupply)
  const [waterSupply, setWaterSupply] = useState(communications.waterSupply)

  const saveFormData = (): void => {
    dispatch(saveAnalogDescForm({
      communications: {
        heating,
        sewerage,
        electricitySupply,
        waterSupply
      }
    }))
  }

  const cancelForm = (): void => {
    dispatch(setAnalogDescShowForm(false))
  }

  return (
    <>
      <div className="analog-desc-form__row">
        <div className="analog-desc-form__title">Коммуникации</div>
        <div className="analog-desc-form__list">
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">Отопление</div>
            <div className="analog-desc-form__value">
              <div
                className={`radio${heating === 'central' ? ' active' : ''}`}
                onClick={() => setHeating('central')}
              ><span>Центральное</span></div>
              <div
                className={`radio${heating === 'autonomous' ? ' active' : ''}`}
                onClick={() => setHeating('autonomous')}
              ><span>Автономное</span></div>
              <div
                className={`radio${heating === 'missing' ? ' active' : ''}`}
                onClick={() => setHeating('missing')}
              ><span>Отсутствует</span></div>
            </div>
          </div>
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">Канализация</div>
            <div className="analog-desc-form__value">
              <div
                className={`radio${sewerage === 'central' ? ' active' : ''}`}
                onClick={() => setSewerage('central')}
              ><span>Центральная</span></div>
              <div
                className={`radio${sewerage === 'autonomous' ? ' active' : ''}`}
                onClick={() => setSewerage('autonomous')}
              ><span>Автономная</span></div>
              <div
                className={`radio${sewerage === 'missing' ? ' active' : ''}`}
                onClick={() => setSewerage('missing')}
              ><span>Отсутствует</span></div>
            </div>
          </div>
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">Электричество</div>
            <div className="analog-desc-form__value">
              <div
                className={`radio${electricitySupply === true ? ' active' : ''}`}
                onClick={() => setElectricitySupply(true)}
              ><span>Есть</span></div>
              <div
                className={`radio${electricitySupply === false ? ' active' : ''}`}
                onClick={() => setElectricitySupply(false)}
              ><span>Нет</span></div>
            </div>
          </div>
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">Водоснабжение</div>
            <div className="analog-desc-form__value">
              <div
                className={`radio${waterSupply === true ? ' active' : ''}`}
                onClick={() => setWaterSupply(true)}
              ><span>Есть</span></div>
              <div
                className={`radio${waterSupply === false ? ' active' : ''}`}
                onClick={() => setWaterSupply(false)}
              ><span>Нет</span></div>
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
