import {FC} from "react";
import {IconScreenshot} from "../../../components/icons/icon-screenshot";
import { AnalogModel } from "../../../models/analog-model";
import moment from "moment";
import {IconChecked} from "../../../components/icons/icon-checked";
import {useDispatch} from "react-redux";
import {showSlider} from "../../../actions/slider.actions";
import {
  fetchAnalogDesc,
  setAnalogDescForm, setAnalogDescIsLoading,
  setAnalogDescShowModal,
  setAnalogDescText
} from '../../analog-desc/analog-desc.actions'
import {IconAvito} from "../../../components/icons/icon-avito";
import {IconCian} from "../../../components/icons/icon-cian";

type PropsTypes = {
  isSelected: boolean
  item: AnalogModel
  isInCompilation: boolean
  onSelectItem: (id: string) => void
}

export const Analog: FC<PropsTypes> = ({ isSelected, item, onSelectItem, isInCompilation = false }) => {
  const dispatch = useDispatch()

  const onImageClick = () => {
    if (item.images.length > 0) {
      const imageList = item.images.map(it => 'https://storage.yandexcloud.net/appraiser-kit/' + it)
      dispatch(showSlider(imageList))
    }
  }

  const showDescription = () => {
    dispatch(setAnalogDescText(item.descriptionHtml))
    const { stead, structureOfPremises, areaDistribution, communications, cadastralNumber } = item.details
    dispatch(setAnalogDescForm({
      stead,
      structureOfPremises,
      areaDistribution,
      communications,
      cadastralNumber
    }))
    dispatch(setAnalogDescShowModal(true))
    dispatch(setAnalogDescIsLoading(false))
  }

  return (
    <div className={`analog block${isSelected ? ' selected' : ''}${isInCompilation ? ' in-compilation' : ''}`}>
      <div className="analog__wrap">
        <div className="analog__image" onClick={onImageClick}>
          { item.images.length > 0 && <img src={`https://storage.yandexcloud.net/appraiser-kit/${item.images[0]}`} />}
        </div>
        <div className="analog__select">
          <span onClick={() => onSelectItem(item.id)}>
            { isSelected
              ? <IconChecked />
              : null
            }
          </span>
          <a
            href={`https://storage.yandexcloud.net/appraiser-kit/screenshots/${item.screenshot}`}
            className="analog__screenshot"
            target="_blank"
            rel="noreferrer"
          >
            <IconScreenshot />
          </a>
        </div>
        <div className="analog__content">
          <div className="analog__header">
            <a
              href={item.link}
              className="analog__title"
              target="_blank"
              rel="noreferrer"
            >{item.title}</a>
            <div className="analog__address">{item.address}{item.district ? ' (' + item.district + ')' : ''}</div>
          </div>
          <div className="analog__main">
            <div className="analog__price-per-square">
              <div className="analog__label">Цена за м², ₽</div>
              {/*<div className="analog__value">{Math.ceil(item.pricePerMeter).toLocaleString('ru')}</div>*/}
              <div className="analog__value">{parseFloat(item.pricePerMeter.toFixed(3))}</div>
            </div>
            <div className="analog__square">
              <div className="analog__label">Площадь, м²</div>
              <div className="analog__value">{parseFloat(item.area.toFixed(3))}</div>
            </div>
            <div className="analog__price">
              <div className="analog__label">Цена за всё, ₽</div>
              <div className="analog__value">{item.price.toLocaleString('ru')}</div>
            </div>
            <div className="analog__date">
              <div className="analog__label">Дата размещения</div>
              <div className="analog__value">{moment(item.startDate).format('DD-MM-YYYY')}</div>
            </div>
            <div className="analog__source">
              {item.source === 'avito.ru' && <IconAvito/>}
              {item.source === 'cian.ru' && <IconCian/>}
            </div>
            {/*{ item.district*/}
            {/*  ? (*/}
            {/*    <div className="analog__district">*/}
            {/*      <div className="analog__label">Район</div>*/}
            {/*      <div className="analog__value">{item.district}</div>*/}
            {/*    </div>*/}
            {/*  )*/}
            {/*  : null*/}
            {/*}*/}
            <div className="analog__desc">
              {/*<button onClick={() => dispatch(fetchAnalogDesc(item.id))}>Описание</button>*/}
              <button onClick={showDescription}>Описание</button>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="analog__link">{item.type}</div>*/}
      {/*<div className="analog__link">{item.purpose}</div>*/}
      {/*<div className="analog__link">{item.region}</div>*/}
      {/*<div className="analog__link">{item.link}</div>*/}
      {/*<div className="analog__description">{item.description}</div>*/}
    </div>
  )
}
