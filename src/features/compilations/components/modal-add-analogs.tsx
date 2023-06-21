import {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAnalogsSelectedList} from "../../analogs/analogs.selectors";
import {Modal} from "../../../components/modal/modal";
import {setCompilationsModalAddAnalogsIsOpen} from "../compilations.actions";
import {getCompilationsCurrent, getCompilationsList} from '../compilations.selectors'
import {CompilationsService} from '../../../services/compilations-service'
import {setAnalogsSelectedList} from '../../analogs/analogs.actions'
import {fetchCompilationItem} from '../../compilation-item/compilation-item.actions'

export const ModalAddAnalogs: FC = () => {
  const selectedList = useSelector(getAnalogsSelectedList)
  const compilationsList = useSelector(getCompilationsList)
  const currentCompilation = useSelector(getCompilationsCurrent)
  const dispatch = useDispatch()

  const closeHandle = () => {
    dispatch(setCompilationsModalAddAnalogsIsOpen(false))
  }

  const submitHandle = async () => {
    if (currentCompilation) {
      await CompilationsService.addAnalogs({
        id: currentCompilation.id,
        analogs: selectedList
      })
      dispatch(setAnalogsSelectedList([]))
      dispatch(setCompilationsModalAddAnalogsIsOpen(false))
      dispatch(fetchCompilationItem(currentCompilation.id))
    }
  }

  if (!currentCompilation) {
    return null
  }

  return (
    <Modal
      onClose={closeHandle}
    >
      <div className="compilations-add-announcements-modal">
        <div className="modal__header">
          Добавление объявлений в подборку
        </div>
        <div className="modal__body compilations-add-announcements-modal__body">
          <div>Выбранные объявления будут добавлены в подборку:</div>
          <div>{currentCompilation.title}</div>
        </div>
        <div className="modal__footer">
          <button onClick={closeHandle} className="btn btn--ghost modal__btn">Отмена</button>
          <button onClick={submitHandle} className="btn btn--primary modal__btn">Продолжить</button>
        </div>
      </div>
    </Modal>
  )
}
