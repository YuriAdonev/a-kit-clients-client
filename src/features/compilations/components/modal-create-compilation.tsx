import {FC, useState, ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Modal} from "../../../components/modal/modal";
import {
  createCompilation,
  setCompilationsModalAddAnalogsIsOpen,
  setCompilationsModalCreateIsOpen
} from '../compilations.actions'

export const ModalCreateCompilation: FC = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>('')

  const closeHandle = () => {
    dispatch(setCompilationsModalCreateIsOpen(false))
  }

  const nameHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value)
  }

  const submitHandler = () => {
    dispatch(createCompilation(name))
  }

  return (
    <Modal
      onClose={closeHandle}
    >
      <div className="create-compilation-modal">
        <div className="modal__header">
          Создание подборки
        </div>
        <div className="modal__body create-compilation-modal__body">
          <input type="text" value={name} placeholder="Введите название" onChange={nameHandler}/>
        </div>
        <div className="modal__footer">
          <button onClick={closeHandle} className="btn btn--ghost modal__btn">Отмена</button>
          <button
            onClick={submitHandler}
            className="btn btn--primary modal__btn"
            disabled={name.length < 5}
          >
            Создать
          </button>
        </div>
      </div>
    </Modal>
  )
}
