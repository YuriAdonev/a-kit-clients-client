import {FC, useState} from "react";
import {useSelector} from "react-redux";
import { v4 as uuidv4 } from 'uuid'
import {getCompilationItemStructuralCondition} from "../../../features/compilation-item/compilation-item.selectors";
import {CompilationStructuresItem} from "./compilation-structures-item";

type PropsTypes = {
  name: 'area' | 'price'
  compilation: any
  reloadData: () => void
}

export const CompilationStructuresList: FC<PropsTypes> = ({ name, compilation, reloadData }) => {
  // const structuralCondition = useSelector(getCompilationItemStructuralCondition)
  const [newActive, setNewActive] = useState(false)
  const [disableButton, setDisableButton] = useState(false)

  return (
    <div>
      { compilation.structuralCondition[name].length < 1 && !disableButton && !newActive
        ? (
          <div className="compilation-structures__empty">
            <p>Вы еще не добавили условия</p>
          </div>
        )
        : null
      }
      { compilation.structuralCondition[name].length > 0 && (
          <div className="compilation-structures__list">
            {compilation.structuralCondition[name].map((item: any) => <CompilationStructuresItem setDisableButton={setDisableButton} name={name} item={item} key={item.id} compilation={compilation} reloadData={reloadData} />)}
          </div>
        )
      }
      {newActive ? <CompilationStructuresItem name={name} isNew={true} compilation={compilation} reloadData={reloadData} setNewActive={setNewActive} /> : disableButton || compilation.structuralCondition[name].length >= 5 ? null : <button className="compilation-structures__add" onClick={() => setNewActive(true)}>Добавить</button>}
    </div>
  )
}
