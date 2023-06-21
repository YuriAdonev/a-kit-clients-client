import {FC} from "react";
import {useSelector} from "react-redux";
import {getCompilationItemCalculatedIndicators} from "../../../features/compilation-item/compilation-item.selectors";
import {CompilationItemTypes} from '../compilation-item.reducer'

type PropsType = {
  compilation: any
}

export const CompilationIndicators: FC<PropsType> = ({ compilation }) => {
  // const calculatedIndicators = useSelector(getCompilationItemCalculatedIndicators)

  return (
    <div className="compilation-indicators block">
      <div className="compilation-indicators__item">
        <div className="compilation-indicators__label">Количество объектов:</div>
        <div className="compilation-indicators__value">{compilation.analogs.length}</div>
      </div>
      <div className="compilation-indicators__item">
        <div className="compilation-indicators__label">Общая площадь, м²:</div>
        <div className="compilation-indicators__value">{compilation.calculatedIndicators.totalArea.toLocaleString('ru')}</div>
      </div>
      <div className="compilation-indicators__item">
        <div className="compilation-indicators__label">Общая цена, ₽:</div>
        <div className="compilation-indicators__value">{compilation.calculatedIndicators.totalPrice.toLocaleString('ru')}</div>
      </div>
      <div className="compilation-indicators__item">
        <div className="compilation-indicators__label">Средневзвешенная цена, ₽/м²:</div>
        <div className="compilation-indicators__value">{compilation.calculatedIndicators.weightedAveragePrice.toLocaleString('ru')}</div>
      </div>
      <div className="compilation-indicators__item">
        <div className="compilation-indicators__label">Среднеарифметическая цена, ₽/м²:</div>
        <div className="compilation-indicators__value">{compilation.calculatedIndicators.averagePrice.toLocaleString('ru')}</div>
      </div>
      <div className="compilation-indicators__item">
        <div className="compilation-indicators__label">Средняя площадь, м²:</div>
        <div className="compilation-indicators__value">{compilation.calculatedIndicators.averageArea.toLocaleString('ru')}</div>
      </div>
      <div className="compilation-indicators__item">
        <div className="compilation-indicators__label">Наибольшая площадь, м²:</div>
        <div className="compilation-indicators__value">{compilation.calculatedIndicators.largestArea.value.toLocaleString('ru')}</div>
        <div className="compilation-indicators__address">{compilation.calculatedIndicators.largestArea.address}</div>
      </div>
      <div className="compilation-indicators__item">
        <div className="compilation-indicators__label">Наибольшая цена, ₽/м²:</div>
        <div className="compilation-indicators__value">{compilation.calculatedIndicators.highestPrice.value.toLocaleString('ru')}</div>
        <span className="compilation-indicators__address">{compilation.calculatedIndicators.highestPrice.address}</span>
      </div>
      <div className="compilation-indicators__item">
        <div className="compilation-indicators__label">Наименьшая площадь, м²:</div>
        <div className="compilation-indicators__value">{compilation.calculatedIndicators.smallestArea.value.toLocaleString('ru')}</div>
        <span className="compilation-indicators__address">{compilation.calculatedIndicators.smallestArea.address}</span>
      </div>
      <div className="compilation-indicators__item">
        <div className="compilation-indicators__label">Наименьшая цена, ₽/м²:</div>
        <div className="compilation-indicators__value">{compilation.calculatedIndicators.lowestPrice.value.toLocaleString('ru')}</div>
        <span className="compilation-indicators__address">{compilation.calculatedIndicators.lowestPrice.address}</span>
      </div>
    </div>
  )
}
