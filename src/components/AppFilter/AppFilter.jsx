import React from 'react'

const AppFilter = ({ name }) => {

  const buttonsData = [
    {name: 'all', label: 'All employees'},
    {name: 'rise', label: 'For promotion'},
    {name: 'moreThen1000', label: 'Salary over $1000'}
  ];

  const onFilterSelect = (name) => {
    console.log(name)
    return name
  } 

  const buttons = buttonsData.map(({name, label}) => {
    
    return (
      <button type="button"
              className="border-white p-1 px-5 border-solid border-2 rounded"
              onClick={() => onFilterSelect(name)}
              key={name}
      >
        {label}
      </button>
    )
  })

  return (
    <div className="mt-6">
      {buttons}
    </div>
  )
}

export default AppFilter