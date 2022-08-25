import './employeesList.css';

const EmployeesList = ({ users, updateUser, deleteUser, query }) => {

    const Employee = ({ user }) => {
        let classNames = "list-group-item flex justify-content-between";
        if (user.increase) {
            classNames += ' increase';
        }
        if (user.rise) {
            classNames += ' like';
        }

        const onToggleCookie = id => {
            updateUser(id, {...user, increase: !user.increase})
        }

        const onToggle = id => {
            updateUser(id, {...user, rise: !user.rise})
        }


        // const onToggleProp = (id, prop) => {
        //   const prop = e.currentTarget.getAttribute('data-toggle');
        //   updateUser(id, {...user, prop: !user.prop})
        //   user.increase = !user.increase
        // }

        // onToggleProp={(e) => onToggleProp(id, )}

		return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={() => onToggle(user.id)}>{user.fullName}</span>
                <input type="text" className="list-group-item-input" defaultValue={user.salary + '$'}/>
                <div className='flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={() => onToggleCookie(user.id)}>
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
            {users && users.filter((user) => user.fullName.includes(query)).map(u => <Employee user={u} key={u.id} />)}
        </ul>
    )
}

export default EmployeesList;