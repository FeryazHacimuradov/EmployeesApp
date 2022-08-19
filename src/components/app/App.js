import AppInfo from '../AppInfo/AppInfo';
import Filter from '../Filter/Filter';
import EmployeesList from '../EmployeesList/EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm';

import './app.css';

const App = () => {
  return (
    <div className="app">
        <AppInfo />

        <Filter />
        
        <EmployeesList/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;