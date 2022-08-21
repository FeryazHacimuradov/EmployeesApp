import { useState, useEffect } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import { loadEmployeesData } from '../../services/EmployeeService';

import './employeesListItem.css';

const EmployeesListItem = () => {

    const { data, setData, query } = useStateContext();

    useEffect(() => {
        loadEmployeesData(setData);
    }, []);

    return (

        <ul className="text-black bg-white dark:text-gray-200 dark:bg-secondary-dark-bg">
            {data.length === 0 ? (
                <span className='text-center mb-0'>No Data Found</span>
            ) : (
                data.filter((employee) => employee.fullName.toLowerCase().includes(query)).map((item) => (
                    <li key={item.id} className="list-group-item flex justify-between">
                        <span className="list-group-item-label ">{item.fullName}</span>
                        <input type="text" className="list-group-item-input text-black bg-white dark:text-gray-200 dark:bg-secondary-dark-bg" defaultValue={item.salary}/>
                        <div className='flex justify-center items-center'>
                            <button type="button"
                                className="btn-cookie btn-sm ">
                                <i className="fas fa-cookie"></i>
                            </button>
            
                            <button type="button"
                                    className="btn-trash btn-sm ">
                                <i className="fas fa-trash"></i>
                            </button>
                            <i className="fas fa-star"></i>
                        </div>
                    </li>
                ))
            )}
        </ul>
    )
}

export default EmployeesListItem;