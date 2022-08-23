import './employeesList.css';

const EmployeesList = ({ users, deleteUser }) => {

    const Employee = ({ user }) => {
		return (
            <li className="list-group-item flex justify-content-between">
                <span className="list-group-item-label">{user.fullName}</span>
                <input type="text" className="list-group-item-input" defaultValue={user.salary}/>
                <div className='flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={() => deleteUser(user.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
		)
	}

    return (
        <ul className="app-list list-group mx-48">
            {users && users.map(u => <Employee user={u} key={u.id} />)}
        </ul>
    )
}

export default EmployeesList;