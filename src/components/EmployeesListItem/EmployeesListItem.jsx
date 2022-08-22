import { useState, useEffect } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

import useEmployeeService from '../../services/EmployeeService';

import { httpHelper } from "../../helpers/httpHelper";

import './employeesListItem.css';

const EmployeesListItem = () => {

    const { query } = useStateContext();

    const { users, deleteUser, getUsers } = useEmployeeService();

	useEffect(() => {
		getUsers()
	}, [])

    const Main = ({ user }) => {
        return (
            <li key={user.id} className="list-group-item flex justify-between">
                <span className="list-group-item-label ">{user.fullName}</span>
                <input type="text" className="list-group-item-input text-black bg-white dark:text-gray-200 dark:bg-secondary-dark-bg" defaultValue={user.salary}/>
                <div className='flex justify-center items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button" className="btn-trash btn-sm" onClick={() => deleteUser(user.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

    return (
        <>
            <ul className="text-black bg-white dark:text-gray-200 dark:bg-secondary-dark-bg">
                {users && users.filter((employee) => employee.fullName.includes(query)).map(u => <Main user={u} key={u.id} />)}
            </ul>
        </>
    )
}

export default EmployeesListItem;