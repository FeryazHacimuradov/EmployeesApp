import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";

import './employeesList.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    )
}

export default EmployeesList;