import {FC, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCompilationList, setCompilationsModalCreateIsOpen} from './compilations.actions'
import {getCompilationsCurrent, getCompilationsList} from './compilations.selectors'
import {NavLink} from 'react-router-dom'
import CompilationsListItem from './components/compilations-list-item'
import {CompilationsService} from '../../services/compilations-service'

export const Compilations: FC = () => {
  const compilationList = useSelector(getCompilationsList)
  const currentCompilation = useSelector(getCompilationsCurrent)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCompilationList())
  }, [])

  const createHandler = () => {
    dispatch(setCompilationsModalCreateIsOpen(true))
  }

  const deleteHandler = async (id: string) => {
    try {
      await CompilationsService.deleteItem({ id })
      dispatch(getCompilationList())
    } catch (err) {}
  }

  return (
    <div className="compilations">
      <div className="page-header">
        <h1>Подборки</h1>
        <div className="page-header__actions">
          <button onClick={createHandler}>Создать</button>
        </div>
      </div>
      {/*<div className="compilations-current">*/}
      {/*  <h3 className="page_subtitle">Текущая подборка</h3>*/}
      {/*  {currentCompilation*/}
      {/*    ? (*/}
      {/*      <CompilationsListItem item={currentCompilation} key={currentCompilation.id} onDelete={deleteHandler} />*/}
      {/*    )*/}
      {/*    : (*/}
      {/*      <div>Выберите текущую подборку</div>*/}
      {/*    )*/}
      {/*  }*/}
      {/*  /!**!/*/}
      {/*</div>*/}
      <div className="compilations__wrap">
        {/*<h3 className="page_subtitle">Все подборки</h3>*/}
        <ul className="compilation-list">
          {compilationList.map(item => (
            <CompilationsListItem item={item} key={item.id} onDelete={deleteHandler} />
          ))}
        </ul>
        <div>Пагинация</div>
      </div>
    </div>
  )
}
