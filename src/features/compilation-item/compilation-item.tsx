import {FC, useEffect, useState} from 'react'
import {CompilationIndicators, CompilationStructuresArea, CompilationStructuresPrice} from "./components";
import {Link, useParams} from 'react-router-dom'
import {CompilationAnalogs} from "./components/compilation-analogs";
import {CompilationsService} from '../../services/compilations-service'
import {buildExcel} from '../../helpers/build-excel'
import {CompilationItemActivePanel} from './components/compilation-item-active-panel'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCompilationItem} from './compilation-item.actions'
import {getCompilationsCurrent} from '../compilations/compilations.selectors'

export const CompilationItem: FC = () => {
  const { compilationId } = useParams()
  const currentCompilation = useSelector(getCompilationsCurrent)
  const dispatch = useDispatch()
  // const [item, setItem] = useState<any>(null)
  const [selectedList, setSelectedList] = useState<string[]>([])

  const reloadData = () => {
    if (compilationId) {
      dispatch(fetchCompilationItem(compilationId))
    }
    // dispatch(fetchCompilationItem(compilationId))
    // getData()
  }

  useEffect(() => {
    reloadData()
    // getData()
  }, [])

  // const getData = async () => {
  //   if (compilationId) {
  //     try {
  //       const response = await CompilationsService.getItem({ id: compilationId })
  //       if (!response.errors) {
  //         dispatch(fetchCompilationItem(compilationId))
  //         // setItem(response)
  //       }
  //     } catch (err) {}
  //   }
  // }

  if (!currentCompilation) {
    return null
  }

  const getExcel = async () => {
    const sortedList = [...currentCompilation.analogs].sort(function(a, b){
      return a.pricePerMeter - b.pricePerMeter
    })
    await buildExcel(sortedList)
  }

  const onSelectItem = (id: string) => {
    if (selectedList.includes(id)) {
      setSelectedList(prevState => prevState.filter(it => it !== id))
    } else {
      setSelectedList(prevState => [...prevState, id])
    }
  }

  const deleteAnalogs = async () => {
    try {
      await CompilationsService.removeAnalogs({ id: currentCompilation.id, analogs: selectedList })
      setSelectedList([])
      reloadData()
    } catch (err) {}
  }

  if (currentCompilation.analogs.length < 1) {
    return (
      <div className="compilation">
        <div className="page-header">
          <h1>Подборка: {currentCompilation.title}</h1>
        </div>
        <div className="compilation__empty">В подборке пусто. Добавьте объявления из <Link to={'/analogs'}>аналогов</Link></div>
      </div>
    )
  }

  return (
    <div className="compilation">
      <div className="page-header">
        <h1>Подборка: {currentCompilation.title}</h1>
        <div className="page-header__actions">
          <button onClick={getExcel}>Выгрузить в Excel</button>
        </div>
      </div>
      <CompilationIndicators compilation={currentCompilation} />
      <CompilationStructuresArea compilation={currentCompilation} reloadData={reloadData} />
      <CompilationStructuresPrice compilation={currentCompilation} reloadData={reloadData} />
      <CompilationAnalogs compilation={currentCompilation} selectedList={selectedList} onSelectItem={onSelectItem} />
      <CompilationItemActivePanel selectedList={selectedList} deleteAnalogs={deleteAnalogs} />
    </div>
  )
}
