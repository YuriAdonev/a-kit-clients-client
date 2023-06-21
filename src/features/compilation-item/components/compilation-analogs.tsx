import {FC} from "react";
import {Analog} from '../../../features/analogs/components';
import {Link} from 'react-router-dom'

type PropsType = {
  compilation: any
  selectedList: string[]
  onSelectItem: (id: string) => void
}

export const CompilationAnalogs: FC<PropsType> = ({ compilation, selectedList, onSelectItem }) => {
  return (
    <div className="compilation-analogs">
      <div className="subtitle">
        <h2 className="compilation-analogs__title">Аналоги</h2>
        <Link to="/analogs">Добавить</Link>
      </div>
      <div className="compilation-analogs-list">
        {compilation.analogs.map((item: any) => (
          <Analog
            key={item.id}
            item={item}
            isInCompilation={false}
            onSelectItem={onSelectItem}
            isSelected={selectedList.includes(item.id)}
          />)
        )}
      </div>
    </div>
  )
}
