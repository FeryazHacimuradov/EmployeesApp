import React, { useEffect } from 'react';
import useEmployeeService from '../../services/EmployeeService';

import { useStateContext } from '../../contexts/ContextProvider';

import './appInfo.css';

const AppInfo = () => {
  const { currentColor } = useStateContext();
  const { users, getUsers } = useEmployeeService();

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className='mt-24'>
      <div className="app-info mx-48 text-2xl rounded bg-white dark:text-gray-200 dark:bg-secondary-dark-bg"
            style={{ backgroundColor: currentColor }}
            >
        <h1>Accounting for employees in company HAJIMURADOV's</h1>
        <h2>Total number of employees: {}</h2>
        <h2>The award will be given to:</h2>
      </div>
    </div>
  )
}

export default AppInfo;