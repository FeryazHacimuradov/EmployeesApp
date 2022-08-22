import React from 'react'

const AppFilter = () => {
  const buttonsData = [
    {name: 'all', label: 'All employees'},
    {name: 'rise', label: 'For promotion'},
    {name: 'moreThen1000', label: 'Salary over $1000'}
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