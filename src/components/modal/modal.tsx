import { FC } from 'react'
import {IconClose} from "../icons/icon-close";

type Props = {
  onClose: () => void
}

export const Modal: FC<Props> = ({ children, onClose }) => {

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__wrapper" onClick={(evt) => evt.stopPropagation()}>
        <div
          className="modal__close"
          onClick={onClose}
        >
          <IconClose />
        </div>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  )
}
