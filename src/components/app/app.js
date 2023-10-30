import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddform from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John V.", salary: 500, increase: false, rise:false, id: 1},
                {name: "Valeriy S.", salary: 1500, increase: true, rise:false, id: 2},
                {name: "Alex B.", salary: 2000, increase: false, rise:false, id: 3}
            ],
            maxIndex: 4,
            term: "",
            filter: "all"
        };
        
    };
    deleteItem = (id) => {        
        this.setState(({data}) => {
            return {
                data: data.filter((item) => item.id!==id)
            };
        });
    };
    addItem = (newItem) => {
        this.setState(({data, maxIndex}) => {
            newItem["increase"] = false;
            newItem["id"] = maxIndex;
            newItem["rise"] = false;
            const newData = [...data];
            newData.push(newItem);
            return {
                data: newData,
                maxIndex: maxIndex + 1
            }
        });
    };

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }));
    };

    appInfoData = () => {
        const {data} = this.state;
        return {
            employees: data.length,
            increased: data.filter(item => item.increase === true).length
        }
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case "rise":
                return items.filter(item =>  item.rise);
            case "more1000":
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo
                    data={this.appInfoData()}
                />
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        filter={filter}
                        onUpdateFilter={this.onUpdateFilter} />
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddform
                    onAdd={this.addItem}
                />
            </div>    
        );
    }

}

export default App;