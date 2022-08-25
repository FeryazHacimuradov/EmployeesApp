import React, {useEffect, useCallback} from 'react'
import './appInfo.css';

const AppInfo = ({ users }) => {

  const totalEmpl = users.length;
  const totalAwardEmpl = users.filter((user) => user.increase).length;

  return (
    <div className='mt-24'>
      <div className="app-info mx-48 text-2xl rounded bg-white dark:text-gray-200 dark:bg-secondary-dark-bg"
            style={{ backgroundColor: '#3d5a81' }}
            >
        <h1>Accounting for employees in company HAJIMURADOV's</h1>
        <h2>Total number of employees: {totalEmpl}</h2>
        <h2>The award will be given to: {totalAwardEmpl}</h2>
      </div>
    </div>
  )
}

export default AppInfo;