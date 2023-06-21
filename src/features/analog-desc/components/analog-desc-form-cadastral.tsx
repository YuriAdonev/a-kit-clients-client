import {FC, useState} from "react";
import {
  saveAnalogDescForm,
  setAnalogDescShowForm
} from "../analog-desc.actions";
import {useDispatch, useSelector} from "react-redux";
import {getAnalogDescForm} from "../analog-desc.selectors";

export const AnalogDescFormCadastral: FC = () => {
  const { cadastralNumber } = useSelector(getAnalogDescForm)
  const dispatch = useDispatch()
  const [current, setCurrent] = useState(cadastralNumber.current)

  const saveFormData = (): void => {
    dispatch(saveAnalogDescForm({
      cadastralNumber: {
        current,
        suitable: cadastralNumber.suitable,
      }
    }))
  }

  const cancelForm = (): void => {
    dispatch(setAnalogDescShowForm(false))
  }

  return (
    <>
      <div className="analog-desc-form__row">
        <div className="analog-desc-form__title">Кадастровый номер</div>
        <div className="analog-desc-form__list">
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">Текущий</div>
            <div className="analog-desc-form__value">
              <input
                type="text"
                value={current}
                onChange={(evt) => setCurrent(evt.target.value)}
              />
            </div>
          </div>
          {/*<div className="analog-desc-form__item">*/}
          {/*  <div className="analog-desc-form__name">Похожие</div>*/}
          {/*  <div className="analog-desc-form__value">*/}
          {/*    <input type="text"/> <button>+</button>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
      <div className="analog-desc-form__footer">
        <button onClick={saveFormData}>Сохранить</button>
        <button onClick={cancelForm}>Отменить</button>
      </div>
    </>
  )
}
