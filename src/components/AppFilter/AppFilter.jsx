import React from 'react'

const AppFilter = () => {
  return (
    <div className="mt-6">
      <button type="button"
              className="border-white p-1 px-5 border-solid border-2 rounded">
              All employees
      </button>
      <button type="button"
              className="border-white p-1 px-5 border-solid border-2 rounded">
              For promotion
      </button>
      <button type="button"
              className="border-white p-1 px-5 border-solid border-2 rounded">
              Salary over $1000
      </button>
    </div>
  )
}

export default AppFilter