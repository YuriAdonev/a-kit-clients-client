import React, {FC} from 'react'
import { Link } from 'react-router-dom'

export const Reports: FC = () => {
  return (
    <div className="reports">
      <div className="page-header">
        <h1>Отчеты</h1>
        <div className="page-header__actions">
          <Link to="/report/new">Создать</Link>
        </div>
      </div>
      <ul className="report-list">
        <li className="report-list-item">Отчет 6</li>
        <li className="report-list-item">Отчет 5</li>
        <li className="report-list-item">Отчет 4</li>
        <li className="report-list-item">Отчет 3</li>
        <li className="report-list-item">Отчет 2</li>
        <li className="report-list-item">Отчет 1</li>
      </ul>
    </div>
  )
}
