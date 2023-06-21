import { FC } from 'react'
import {Slider} from "../components/slider/slider";
import {useSelector} from "react-redux";
import {getSliderIsActive} from "../selectors/slider.selectors";
import {getAnalogDescShowModal} from "../features/analog-desc/analog-desc.selectors";
import {ModalAddAnalogs} from "../features/compilations/components/modal-add-analogs";
import {
  getCompilationsModalAddAnalogsIsOpen,
  getCompilationsModalCreateIsOpen
} from "../features/compilations/compilations.selectors";
import {ModalCreateCompilation} from "../features/compilations/components/modal-create-compilation";
import {AnalogDescModal} from '../features/analog-desc/analog-desc-modal'

export const Modals: FC = () => {
  const sliderIsActive = useSelector(getSliderIsActive)
  const descriptionIsActive = useSelector(getAnalogDescShowModal)
  const addAnalogsToCompilationModalIsActive = useSelector(getCompilationsModalAddAnalogsIsOpen)
  const createCompilationModalIsActive = useSelector(getCompilationsModalCreateIsOpen)

  return (
    <>
      { sliderIsActive ? <Slider /> : null }
      { descriptionIsActive ? <AnalogDescModal /> : null }
      { addAnalogsToCompilationModalIsActive ? <ModalAddAnalogs /> : null }
      { createCompilationModalIsActive ? <ModalCreateCompilation /> : null }
    </>
  )
}
