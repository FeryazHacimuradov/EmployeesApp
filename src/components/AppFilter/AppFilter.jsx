import React from 'react'

const AppFilter = () => {
  const buttonsData = [
    {name: 'all', label: 'Все сотрудники'},
    {name: 'rise', label: 'На повышение'},
    {name: 'moreThen1000', label: 'З/П больше 1000$'}
  ];

  const buttons = buttonsData.map(({name, label}) => {
    return (
      <button type="button"
              className="border-white mt-3 p-1 px-5 border-solid border-2 rounded"
              key={name}
              // {/* onClick={() => props.onFilterSelect(name)} */}
        >
          {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
}

export default AppFilter