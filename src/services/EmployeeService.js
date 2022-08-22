import { useState } from "react";
import { httpHelper } from "../helpers/httpHelper";

const useEmployeeService = () => {
  const [users, setUsers] = useState(null);

    const url = "http://localhost:8000/employees";
	const api = httpHelper()

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

    return { users, setUsers, postUser, updateUser, deleteUser, getUsers }

}

export default useEmployeeService;