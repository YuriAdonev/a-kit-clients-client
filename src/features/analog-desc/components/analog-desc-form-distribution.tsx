import {FC, useState} from "react";
import {
  saveAnalogDescForm,
  setAnalogDescShowForm
} from "../analog-desc.actions";
import {useDispatch, useSelector} from "react-redux";
import {getAnalogDescForm} from "../analog-desc.selectors";

export const AnalogDescFormDistribution: FC = () => {
  const { areaDistribution } = useSelector(getAnalogDescForm)
  const dispatch = useDispatch()
  const [basement, setBasement] = useState(areaDistribution.basement)
  const [groundFloor, setGroundFloor] = useState(areaDistribution.groundFloor)
  const [firstFloor, setFirstFloor] = useState(areaDistribution.firstFloor)
  const [secondFloorAndAbove, setSecondFloorAndAbove] = useState(areaDistribution.secondFloorAndAbove)

  const saveFormData = (): void => {
    dispatch(saveAnalogDescForm({
      areaDistribution: {
        basement,
        groundFloor,
        firstFloor,
        secondFloorAndAbove
      }
    }))
  }

  const cancelForm = (): void => {
    dispatch(setAnalogDescShowForm(false))
  }

  return (
    <>
      <div className="analog-desc-form__row">
        <div className="analog-desc-form__title">Распределение площадей</div>
        <div className="analog-desc-form__list">
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">Подвал</div>
            <div className="analog-desc-form__value">
              <input
                type="number"
                value={basement}
                onChange={(evt) => setBasement(parseFloat(evt.target.value))}
              />
            </div>
          </div>
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">Цоколь</div>
            <div className="analog-desc-form__value">
              <input
                type="number"
                value={groundFloor}
                onChange={(evt) => setGroundFloor(parseFloat(evt.target.value))}
              />
            </div>
          </div>
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">1 этаж</div>
            <div className="analog-desc-form__value">
              <input
                type="number"
                value={firstFloor}
                onChange={(evt) => setFirstFloor(parseFloat(evt.target.value))}
              />
            </div>
          </div>
          <div className="analog-desc-form__item">
            <div className="analog-desc-form__name">2 этаж и выше</div>
            <div className="analog-desc-form__value">
              <input
                type="number"
                value={secondFloorAndAbove}
                onChange={(evt) => setSecondFloorAndAbove(parseFloat(evt.target.value))}
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
