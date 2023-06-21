import React, { FC } from 'react'

type PropsType = {
  selectedList: any[]
  deleteAnalogs: () => Promise<void>
}

export const CompilationItemActivePanel: FC<PropsType> = ({ selectedList, deleteAnalogs }) => {
  return (
    <div className={`active-panel${selectedList.length > 0 ? ' show' : ''}`}>
      <button
        onClick={deleteAnalogs}
      >
        Удалить
      </button>
    </div>
  )
}
