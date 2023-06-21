import {FC, useState} from "react";
import {
  saveAnalogDescForm,
  setAnalogDescShowForm
} from "../analog-desc.actions";
import {useDispatch, useSelector} from "react-redux";
import {getAnalogDescForm} from "../analog-desc.selectors";

export const AnalogDescFormStead: FC = () => {
  const { stead } = useSelector(getAnalogDescForm)
  const dispatch = useDispatch()
  const [availability, setAvailability] = useState(stead.availability)
  const [area, setArea] = useState(stead.area)
  const [ownership, setOwnership] = useState(stead.ownership)

  const saveFormData = (): void => {
    dispatch(saveAnalogDescForm({
      stead: {
        availability,
        area,
        ownership
      }
    }))
  }

  const cancelForm = (): void => {
    dispatch(setAnalogDescShowForm(false))
  }

  const availabilityHandle = () => {

  }

  return (
    <>
      <div className="analog-desc-form__row">
        <div className="analog-desc-form__title">Земельный участок</div>
        <div className="analog-desc-form__list">
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">Наличие</div>
            <div className="analog-desc-form__value">
              <div
                className={`radio${availability === true ? ' active' : ''}`}
                onClick={() => setAvailability(true)}
              ><span>Есть</span></div>
              <div
                className={`radio${availability === false ? ' active' : ''}`}
                onClick={() => setAvailability(false)}
              ><span>Нет</span></div>
            </div>
          </div>
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">Площадь</div>
            <div className="analog-desc-form__value">
              <input
                type="number"
                value={area}
                onChange={(evt) => setArea(parseFloat(evt.target.value))}
              />
            </div>
          </div>
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">Право</div>
            <div className="analog-desc-form__value">
              <div
                className={`radio${ownership === 'own' ? ' active' : ''}`}
                onClick={() => setOwnership('own')}
              ><span>Собственность</span></div>
              <div
                className={`radio${ownership === 'rent' ? ' active' : ''}`}
                onClick={() => setOwnership('rent')}
              ><span>Аренда</span></div>
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
