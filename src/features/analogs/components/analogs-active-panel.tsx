import React, { FC } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAnalogsSelectedList} from "../analogs.selectors";
import {setCompilationsModalAddAnalogsIsOpen} from "../../compilations/compilations.actions";
import {getCompilationsCurrent} from '../../compilations/compilations.selectors'

export const AnalogsActivePanel: FC = () => {
  const selectedList = useSelector(getAnalogsSelectedList)
  const currentCompilation = useSelector(getCompilationsCurrent)
  const dispatch = useDispatch()

  if (!currentCompilation) {
    return null
  }

  return (
    <div className={`active-panel${selectedList.length > 0 ? ' show' : ''}`}>
      <button
        onClick={() => dispatch(setCompilationsModalAddAnalogsIsOpen(true))}
      >
        Добавить
      </button>
      <div>в подборку {currentCompilation.title}</div>
    </div>
  )
}
