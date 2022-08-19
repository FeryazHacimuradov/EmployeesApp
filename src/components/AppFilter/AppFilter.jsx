import React from 'react'

const AppFilter = () => {
  return (
    <div className="mt-6">
      <button type="button"
              className="btn btn-light">
              All employees
      </button>
      <button type="button"
              className="btn btn-outline-light">
              For promotion
      </button>
      <button type="button"
              className="btn btn-outline-light">
              Salary over $1000
      </button>
    </div>
  )
}

export default AppFilter