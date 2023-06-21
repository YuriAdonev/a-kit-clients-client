import {FC, ChangeEvent, useState} from "react";
import {useDispatch} from 'react-redux'
import {createCompilation} from '../../features/compilations/compilations.actions'

export const CreateCompilationModal: FC = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const nameHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value)
  }

  const submitHandler = () => {
    dispatch(createCompilation(name))
  }

  return (
    <div className="create-compilation-modal">
      <div className="modal__header">
        <h3>Создать подборку</h3>
      </div>
      <div className="modal__body">
        <input type="text" onChange={nameHandler} value={name}/>
      </div>
      <div className="modal__footer">
        <button>Отмена</button>
        <button disabled={name === ''} onClick={submitHandler}>Сохранить</button>
      </div>
    </div>
  )
}
