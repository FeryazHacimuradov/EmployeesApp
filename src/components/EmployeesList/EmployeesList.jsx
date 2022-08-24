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

        const onToogle = id => {
            updateUser(id, {...user ,increase: !user.increase})
            user.increase = !user.increase
        }

        const onToggleProp = (id) => {
            
            console.log(id);
            // updateUser(id, {...user, prop: !user.prop});
        }

        // const prop = e.currentTarget.getAttribute('data-toggle');

        // const onToggleProp = (id, prop) => {
        //     updateUser(id, {...user, prop: !user.prop})
        //     user.increase = !user.increase
        // }

        // onToggleProp={(e) => onToggleProp(id, )}

		return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleProp(user.id)} data-toggle="rise">{user.fullName}</span>
                <input type="text" className="list-group-item-input" defaultValue={user.salary}/>
                <div className='flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={() => onToogle(user.id)}>
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