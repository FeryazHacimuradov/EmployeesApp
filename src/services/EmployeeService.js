import axios from "axios";

export const loadEmployeesData = async (setData) => {
    return await axios
        .get("http://localhost:8000/employees")
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
}

