import { useStateContext } from '../../contexts/ContextProvider';

import './employeesAddForm.css';

const EmployeesAddForm = () => {
  const { currentColor } = useStateContext();

    return (
        <div className="app-add-form"
            style={{ backgroundColor: currentColor }}
        >
            <h3 className='text-2xl '>Add a new employee</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label bg-white dark:text-gray-200 dark:bg-secondary-dark-bg"
                    placeholder="What's his/her name?" />
                <input type="number"
                    className="form-control new-post-label bg-white dark:text-gray-200 dark:bg-secondary-dark-bg"
                    placeholder="Salary in $?" />

                <button type="submit"
                    className="border-white p-1 px-5 border-solid border-2 rounded ">Add</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;