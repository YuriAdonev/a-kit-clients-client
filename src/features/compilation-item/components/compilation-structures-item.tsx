import {FC, ChangeEvent, useState} from "react";
import {StructuralConditionItemTypes} from "../compilation-item.reducer";
import { v4 as uuidv4 } from 'uuid'
import {IconTrash} from "../../../components/icons/icon-trash";
import {IconEditField} from "../../../components/icons/icon-edit-field";
import {CompilationsService} from '../../../services/compilations-service'

type PropsTypes = {
  name: 'area' | 'price'
  item?: StructuralConditionItemTypes
  isNew?: boolean
  setNewActive?: (value: boolean) => void
  setDisableButton?: (value: boolean) => void
  compilation: any
  reloadData: () => void
}

export const CompilationStructuresItem: FC<PropsTypes> = ({ name,item, isNew= false, setNewActive, setDisableButton, compilation, reloadData }) => {
  const [isEditMode, setIsEditMode] = useState(isNew)
  const [from, setFrom] = useState(item?.from?.toString() || '')
  const [to,setTo] = useState(item?.to?.toString() || '')

  const saveItem = async () => {
    if (isNew && setNewActive) {
      const id = uuidv4()
      try {
        await CompilationsService.addStructuralCondition({ compilationId: compilation.id, id, from: parseFloat(from), to: parseFloat(to), name })
        setNewActive(false)
        reloadData()
      } catch (err) {}
    }
    if (item && !isNew) {
      try {
        await CompilationsService.editStructuralCondition({ compilationId: compilation.id, id: item.id, from: parseFloat(from), to: parseFloat(to), name })
        setIsEditMode(false)
        if (setDisableButton) {
          setDisableButton(false)
        }
        reloadData()
      } catch (err) {}
    }
  }

  const removeItem = async () => {
    if (isNew && setNewActive) {
      setNewActive(false)
    }
    if (item && !isNew) {
      try {
        await CompilationsService.deleteStructuralCondition({ compilationId: compilation.id, id: item.id, name })
        if (setDisableButton) {
          setDisableButton(false)
        }
        reloadData()
      } catch (err) {}
    }
  }

  const editItem = () => {
    setIsEditMode(true)
    if (setDisableButton) {
      setDisableButton(true)
    }
  }

  const fromHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setFrom(evt.target.value)
  }

  const toHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setTo(evt.target.value)
  }

  return (
    <div className={`compilation-structures-item${!isEditMode && item && item.count > 0 ? ' compilation-structures-item--color' : ''}`}>
      {isEditMode
        ? (
          <div className="compilation-structures-item__wrap">
            <div className="compilation-structures-item__conditions">
              от <input type="number" value={from} onChange={fromHandler}/> до <input type="number" value={to} onChange={toHandler}/> {name === 'area' ? 'м²' : '₽/м²'}
              <button className="compilation-structures-item__save" onClick={saveItem}>Сохранить</button>
              <div className="compilation-structures-item__delete" onClick={removeItem}>
                <IconTrash />
              </div>
            </div>
          </div>
        )
        : (
          <div className="compilation-structures-item__wrap">
            <div className="compilation-structures-item__conditions">
              от <span>{from ? parseFloat(from).toLocaleString('ru') : ''}</span> до <span>{to ? parseFloat(to).toLocaleString('ru') : ''}</span> {name === 'area' ? 'м²' : '₽/м²'}
              <div className="compilation-structures-item__edit" onClick={editItem}>
                <IconEditField />
              </div>
            </div>
            {item && item.count > 0
              ? <div className="compilation-structures-item__values">Количество объектов {item.count}</div>
              : <div className="compilation-structures-item__values">Нет объектов</div>
            }
          </div>
        )
      }
    </div>
  )
}
