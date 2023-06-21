import {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSliderCurrentIndex, getSliderImageList, getSliderIsActive} from "../../selectors/slider.selectors";
import {hideSlider, setSliderCurrentIndex} from "../../actions/slider.actions";

export const Slider: FC = () => {
  const isActive = useSelector(getSliderIsActive)
  const imageList = useSelector(getSliderImageList)
  const currentIndex = useSelector(getSliderCurrentIndex)
  const dispatch = useDispatch()

  if (!isActive) {
    return null
  }

  const closeSlider = () => {
    dispatch(hideSlider())
  }

  const nextHandler = () => {
    if (currentIndex === imageList.length - 1) {
      dispatch(setSliderCurrentIndex(0))
    } else {
      dispatch(setSliderCurrentIndex(currentIndex + 1))
    }
  }

  const prevHandler = () => {
    if (currentIndex === 0) {
      dispatch(setSliderCurrentIndex(imageList.length - 1))
    } else {
      dispatch(setSliderCurrentIndex(currentIndex - 1))
    }
  }

  return (
    <div className="slider">
      <div className="slider__wrap">
        {imageList.length > 1 && <div className="slider__nav slider__nav--prev" onClick={prevHandler}>назад</div>}
        <div className="slider__content">
          {imageList.map((image, idx) => {
            return (
              <div className={`slider__item${ currentIndex === idx ? ' active' : ''}`} key={image}>
                <img src={image} />
              </div>
            )
          })}
        </div>
        {imageList.length > 1 && <div className="slider__nav slider__nav--next" onClick={nextHandler}>вперед</div>}
      </div>
      <div onClick={closeSlider} className="slider__close">Закрыть</div>
    </div>
  )
}
