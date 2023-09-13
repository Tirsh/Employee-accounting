import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddform from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    const data = [
        {name: "John V.", salary: 500, increase: false},
        {name: "Valeriy S.", salary: 1500, increase: true},
        {name: "Alex B.", salary: 2000, increase: false}
    ];
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddform />
        </div>

    );
}

export default App;