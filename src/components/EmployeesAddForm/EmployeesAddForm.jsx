import './employeesAddForm.css';

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form"
            style={{ backgroundColor: '#3d5a81' }}
        >
            <h3 className='text-2xl'>Add a new employee</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="What's his/her name?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Salary in $?" />

                <button type="submit"
                    className="border-white p-1 px-5 border-solid border-2 rounded">Add</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;