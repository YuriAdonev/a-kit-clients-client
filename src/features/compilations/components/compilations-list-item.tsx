import {Link} from 'react-router-dom'
import {FC} from 'react'

type PropsType = {
  item: any
  onDelete: (id: string) => Promise<void>
}

const CompilationsListItem: FC<PropsType> = ({ item, onDelete }) => {
  return (
    <li className="compilation-list-item block">
      <div className="compilation-list-item__name">
        <Link to={`/compilation/${item.id}`} className="compilation-list-item__btn">{item.title}</Link>
      </div>
      <div className="compilation-list-item__date">{(new Date(item.createdDate)).toLocaleString()}</div>
      <div className="compilation-list-item__author">{item.createdBy}</div>
      <button onClick={() => onDelete(item.id)}>В архив</button>
    </li>
  )
}

export default CompilationsListItem
