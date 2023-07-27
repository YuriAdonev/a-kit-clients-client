import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAnalogDescForm} from "../analog-desc.selectors";
import {
  setAnalogDescCurrentForm,
  setAnalogDescShowForm
} from "../analog-desc.actions";
import {IconEdit} from "../../../components/icons/icon-edit";

export const AnalogDescExtended: FC = () => {
  const { stead, structureOfPremises, areaDistribution, communications, cadastralNumber } = useSelector(getAnalogDescForm)
  const dispatch = useDispatch()

  const showForm = (name: string): void => {
    dispatch(setAnalogDescCurrentForm(name))
    dispatch(setAnalogDescShowForm(true))
  }

  return (
    <div className="analog-desc-extended">
      <div className="analog-desc-extended__wrap">
        <div className="analog-desc-extended__row">
          <div className="analog-desc-extended__title">
            <span>Земельный участок</span>
            <button onClick={() => showForm('stead')}><IconEdit /></button>
          </div>
          <div className="analog-desc-extended__list">
            {stead.availability === null && stead.area === null && stead.ownership === null
              ? <div className="analog-desc-extended__empty">Не заполнено</div>
              : (
                <>
                  <div className="analog-desc-extended__item">
                    <div className="analog-desc-extended__name">Наличие:</div>
                    <div className="analog-desc-extended__value">{stead.availability === true ? 'Да' : stead.availability === null ? 'не заполнено' : 'нет'}</div>
                  </div>
                  {stead.availability === true && (
                    <>
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Площадь</div>
                        <div className="analog-desc-extended__value">{stead.area === null || stead.area === '' ? 'не заполнено' : stead.area}</div>
                      </div>
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Право</div>
                        <div className="analog-desc-extended__value">{stead.ownership === 'own' ? 'собственность' : stead.ownership === 'rent' ? 'аренда' : 'не заполнено'}</div>
                      </div>
                    </>
                  )}
                </>
              )
            }
          </div>
        </div>
        <div className="analog-desc-extended__row">
          <div className="analog-desc-extended__title">
            <span>Структура помещений</span>
            <button onClick={() => showForm('structureOfPremises')}><IconEdit /></button>
          </div>
          <div className="analog-desc-extended__list">
            {structureOfPremises.warm === null && structureOfPremises.cold === null && structureOfPremises.officeOrTrade === null
              ? <div className="analog-desc-extended__empty">Не заполнено</div>
              : (
                <>
                  {structureOfPremises.cold !== null && structureOfPremises.cold !== ''
                    ? (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Производственно-складские холодные</div>
                        <div className="analog-desc-extended__value">{structureOfPremises.cold}</div>
                      </div>
                    )
                    : null
                  }
                  {structureOfPremises.warm !== null && structureOfPremises.warm !== ''
                    ? (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Производственно-складские теплые</div>
                        <div className="analog-desc-extended__value">{structureOfPremises.warm}</div>
                      </div>
                    )
                      : null
                  }
                  {structureOfPremises.officeOrTrade !== null && structureOfPremises.officeOrTrade !== ''
                    ? (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Офисно-торговые</div>
                        <div className="analog-desc-extended__value">{structureOfPremises.officeOrTrade}</div>
                      </div>
                    )
                      : null
                  }
                </>
              )
            }
          </div>
        </div>
        <div className="analog-desc-extended__row">
          <div className="analog-desc-extended__title">
            <span>Распределение площадей</span>
            <button onClick={() => showForm('areaDistribution')}><IconEdit /></button>
          </div>
          <div className="analog-desc-extended__list">
            {areaDistribution.basement === null && areaDistribution.groundFloor === null && areaDistribution.firstFloor === null && areaDistribution.secondFloorAndAbove === null
              ? <div className="analog-desc-extended__empty">Не заполнено</div>
              : (
                <>
                  {areaDistribution.basement !== null && areaDistribution.basement !== ''
                    ? (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Подвал</div>
                        <div className="analog-desc-extended__value">{areaDistribution.basement}</div>
                      </div>
                    )
                    : null
                  }
                  {areaDistribution.groundFloor !== null && areaDistribution.groundFloor !== ''
                    ? (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Цоколь</div>
                        <div className="analog-desc-extended__value">{areaDistribution.groundFloor}</div>
                      </div>
                    )
                    : null
                  }
                  {areaDistribution.firstFloor !== null && areaDistribution.firstFloor !== ''
                    ? (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">1 этаж</div>
                        <div className="analog-desc-extended__value">{areaDistribution.firstFloor}</div>
                      </div>
                    )
                    : null
                  }
                  {areaDistribution.secondFloorAndAbove !== null && areaDistribution.secondFloorAndAbove !== ''
                    ? (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">2 этаж и выше</div>
                        <div className="analog-desc-extended__value">{areaDistribution.secondFloorAndAbove}</div>
                      </div>
                    )
                    : null
                  }
                </>
              )
            }
          </div>
        </div>
        <div className="analog-desc-extended__row">
          <div className="analog-desc-extended__title">
            <span>Коммуникации</span>
            <button onClick={() => showForm('communications')}><IconEdit /></button>
          </div>
          <div className="analog-desc-extended__list">
            {communications.heating === null && communications.sewerage === null && communications.electricitySupply === null && communications.waterSupply === null
              ? <div className="analog-desc-extended__empty">Не заполнено</div>
              : (
                <>
                  {communications.heating !== null
                    ? (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Отопление</div>
                        <div className="analog-desc-extended__value">
                          {communications.heating === 'central' && 'Центральное'}
                          {communications.heating === 'autonomous' && 'Автономное'}
                          {communications.heating === 'missing' && 'Отсутствует'}
                        </div>
                      </div>
                    )
                    : (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Отопление</div>
                        <div className="analog-desc-extended__value">Не заполнено</div>
                      </div>
                    )
                  }
                  {communications.sewerage !== null
                    ? (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Канализация</div>
                        <div className="analog-desc-extended__value">
                          {communications.sewerage === 'central' && 'Центральная'}
                          {communications.sewerage === 'autonomous' && 'Автономная'}
                          {communications.sewerage === 'missing' && 'Отсутствует'}
                        </div>
                      </div>
                    )
                      : (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Канализация</div>
                        <div className="analog-desc-extended__value">Не заполнено</div>
                      </div>
                    )
                  }
                  {communications.electricitySupply !== null
                    ? (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Электричество</div>
                        <div className="analog-desc-extended__value">{communications.electricitySupply ? 'есть' : 'нет'}</div>
                      </div>
                    )
                      : (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Электричество</div>
                        <div className="analog-desc-extended__value">Не заполнено</div>
                      </div>
                    )
                  }
                  {communications.waterSupply !== null
                    ? (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Водоснабжение</div>
                        <div className="analog-desc-extended__value">{communications.waterSupply ? 'есть' : 'нет'}</div>
                      </div>
                    )
                      : (
                      <div className="analog-desc-extended__item">
                        <div className="analog-desc-extended__name">Водоснабжение</div>
                        <div className="analog-desc-extended__value">Не заполнено</div>
                      </div>
                    )
                  }
                </>
              )
            }
          </div>
        </div>
        <div className="analog-desc-extended__row">
          <div className="analog-desc-extended__title">
            <span>Кадастровый номер</span>
            <button onClick={() => showForm('cadastralNumber')}><IconEdit /></button>
          </div>
          <div className="analog-desc-extended__list">
            {cadastralNumber.current === null && cadastralNumber.suitable === null
              ? <div className="analog-desc-extended__empty">Не заполнено</div>
              : (
                <>
                  <div className="analog-desc-extended__item">
                    <div className="analog-desc-extended__name">Текущий</div>
                    <div className="analog-desc-extended__value">
                      {cadastralNumber.current ? cadastralNumber.current : 'Не заполнено'
                      }
                    </div>
                  </div>
                  {/* <div className="analog-desc-extended__item">
                    <div className="analog-desc-extended__name">Похожие</div>
                    <div className="analog-desc-extended__value">
                      {cadastralNumber.suitable !== null && cadastralNumber.suitable.length > 0
                        ? cadastralNumber.suitable.map((it: string) => <p>{it}</p>)
                        : 'Не заполнено'
                      }
                    </div>
                  </div> */}
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
