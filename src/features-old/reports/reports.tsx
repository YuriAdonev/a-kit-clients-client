import React, {FC} from 'react'

export const Reports: FC = () => {
  return (
    <div className="reports">
      <div className="page-header">
        <h1>Отчеты</h1>
        <div className="page-header__actions">
          <button>Создать</button>
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
