import { useState, useEffect } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import useEmployeeService from '../../services/EmployeeService';

import './employeesAddForm.css';

const EmployeesAddForm = ({ userData = {} }) => {

    const [user, setUser] = useState({
		fullName: userData.fullName ?? "",
		salary: userData.salary ?? "",
	})

    const { currentColor } = useStateContext();
    const { postUser, updateUser } = useEmployeeService();

	const handleValue = e => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const submitUser = e => {
		e.preventDefault();

        if(user.fullName.length > 3 && user.salary > 0) {
            if (userData.id) {
                updateUser(userData.id, user)
            } else {
                postUser(user)
            }
        }
	}    

    return (
        <div className="app-add-form" style={{ backgroundColor: currentColor }}>
            <h3 className='text-2xl '>Add a new employee</h3>
            <form onSubmit={submitUser} className="add-form d-flex">
                <input type="text"
                        name='fullName'
                        value={user.fullName}
                        onChange={e => handleValue(e)}
                        className="form-control new-post-label text-black bg-white dark:text-gray-200 dark:bg-secondary-dark-bg"
                        placeholder="What's his/her name?" />
                <input type="number"
                        name="salary"
                        value={user.salary}
                        onChange={e => handleValue(e)}
                        className="form-control new-post-label text-black bg-white dark:text-gray-200 dark:bg-secondary-dark-bg"
                        placeholder="Salary in $?" />
                <button type="submit"
                        className="border-white p-1 px-5 border-solid border-2 rounded"
                        > Add
                </button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;