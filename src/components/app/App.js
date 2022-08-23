import React, { useState, useEffect } from "react";
import { httpHelper } from "../helpers/httpHelper";
import AppInfo from '../AppInfo/AppInfo';
import Filter from '../Filter/Filter';
import EmployeesList from '../EmployeesList/EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm';

import './App.css';

const App = () => {

  const [users, setUsers] = useState(null)

	const url = "http://localhost:8000/employees"
	const api = httpHelper()

	useEffect(() => {
		getUsers()
	}, [])

	const postUser = user => {
		api
			.post(`${url}`, { body: user })
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	const updateUser = (id, user) => {
		api
			.put(`${url}/${id}`, { body: user })
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	const deleteUser = id => {
		api
			.del(`${url}/${id}`, {})
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	const getUsers = () => {
		api
			.get(`${url}?_expand=companies`)
			.then(res => {
				setUsers(res)
			})
			.catch(err => console.log(err))
	}

	if (!users) return null

  return (
    <div className="app">
        <AppInfo />
        <Filter />
        <EmployeesList               
              users={users} 
              setUsers={setUsers}
              updateUser={updateUser}
              deleteUser={deleteUser} />
        <EmployeesAddForm postUser={postUser} />
    </div>
  );
}

export default App;