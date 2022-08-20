import './employeesListItem.css';



const EmployeesListItem = () => {
    return (
        <li className="list-group-item flex justify-between text-black bg-white dark:text-gray-200 dark:bg-secondary-dark-bg">
            <span className="list-group-item-label ">John Smith</span>
            <input type="text" className="list-group-item-input text-black bg-white dark:text-gray-200 dark:bg-secondary-dark-bg" defaultValue="1000$"/>
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
    )
}

export default EmployeesListItem;