import React, { useState, useRef } from 'react';
import './employeesAddForm.css';

const EmployeesAddForm = ({ userData = {}, updateUser, postUser }) => {

    const [user, setUser] = useState({
		fullName: userData.fullName ?? "",
		salary: userData.salary ?? "",
	})


	const handleValue = e => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

    const handleClear = (e) => {
        setUser({
            fullName: userData.fullName ?? "",
            salary: userData.salary ?? "",
        });
    }

	const submitUser = e => {
		e.preventDefault();

        if(user.fullName.length > 3 && user.salary > 0) {
                postUser(user)
            // if (userData.id) {
            //     updateUser(userData.id, user)
            // } else {
            //     postUser(user)
            // }
        }
        handleClear()
    }

    return (
        <div className="app-add-form">
            <h3>Add a new employee</h3>
            <form
                className="add-form d-flex"
                onSubmit={submitUser}>
                <input type="text"
                    name='fullName'
                    value={user.fullName}
                    className="form-control text-black new-post-label"
                    placeholder="What's his/her name?"
                    onChange={e => handleValue(e)}
                    />
                <input type="number"
                    name='salary'
                    value={user.salary}
                    className="form-control text-black new-post-label"
                    placeholder="Salary in $?" 
                    onChange={e => handleValue(e)}
                    />

                <button type="submit"
                    className="border-white p-1 px-5 border-solid border-2 rounded"
                    
                    >Add</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;