import React, {FC} from 'react'
import { AnalogsList, AnalogsActivePanel } from './components'
import {AnalogsForm} from '../analogs-form/analogs-form'
import {useSelector} from 'react-redux'
import {getCompilationsCurrent} from '../compilations/compilations.selectors'

export const Analogs: FC = () => {
  const currentCompilation = useSelector(getCompilationsCurrent)

  if (!currentCompilation) {
    return null
  }

  return (
    <div className="analogs">
      <h1>Поиск аналогов в подборку {currentCompilation.title}</h1>
      <AnalogsForm />
      <AnalogsList />
      <AnalogsActivePanel />
    </div>
  )
}
