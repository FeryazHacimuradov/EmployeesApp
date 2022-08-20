import AppInfo from '../AppInfo/AppInfo';
import Filter from '../Filter/Filter';
import EmployeesList from '../EmployeesList/EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm';
import ThemeSettings from '../ThemeSettings/ThemeSettings';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';

import { useStateContext } from '../../contexts/ContextProvider';

import './app.css';

const App = () => {
  const { currentMode, themeSettings, setThemeSettings } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className='dark:bg-main-dark-bg'>
        <div className="fixed right-12 bottom-12" style={{ zIndex: '1000' }}>
          <TooltipComponent content="Settings" position="Top">
            <button type="button" 
                    className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                    onClick={() => setThemeSettings(true)}
                    style={{ background: 'blue', borderRadius: '50%'}}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        <div className="app">
          {themeSettings && <ThemeSettings />}

          <AppInfo />

          <Filter />
          
          <EmployeesList/>
          <EmployeesAddForm/>
        </div>
      </div>
    </div>
  );
}

export default App;