import {FC, MouseEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  getAnalogDescIsLoading,
  getAnalogDescShowForm,
  getAnalogDescText
} from "./analog-desc.selectors";
import {AnalogDescForm, AnalogDescExtended} from "./components";
import {setAnalogDescShowModal} from "./analog-desc.actions";
import {Spinner} from "../../components/spinner";

export const AnalogDescModal: FC = () => {
  const isLoading = useSelector(getAnalogDescIsLoading)
  const text = useSelector(getAnalogDescText)
  const showForm = useSelector(getAnalogDescShowForm)
  const dispatch = useDispatch()

  const closeModal = (): void => {
    dispatch(setAnalogDescShowModal(false))
  }

  const stopPropagation = (evt: MouseEvent<HTMLDivElement>): void => {
    evt.stopPropagation()
  }

  return (
    <div className="analog-desc-modal" onClick={closeModal}>
      <div className="analog-desc-modal__wrap" onClick={stopPropagation}>
        {isLoading
          ? (
            <div className="analog-desc-modal__loading">
              <Spinner />
            </div>
          )
          : (
            <>
              <div className="analog-desc-modal__text" dangerouslySetInnerHTML={{__html: text}} />
              {showForm
                ? <AnalogDescForm />
                : <AnalogDescExtended />
              }
            </>
          )
        }
      </div>
      {/*<div className="announcement-description-modal__close">X</div>*/}
    </div>
  )
}
