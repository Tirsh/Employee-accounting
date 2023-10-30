import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: ""
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    saveFormdata = (e, onAdd) => {
        e.preventDefault();
        onAdd(this.state);
        this.setState(() => ({
            name: "",
            salary: ""
        }))
    }
    render() {
        const {onAdd} = this.props;
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit={(e) => this.saveFormdata(e, onAdd)}>
                <input required 
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name="name" 
                    value={name}
                    onChange={this.onValueChange}/>
                <input required 
                    type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name="salary"
                    value={salary}
                    onChange={this.onValueChange}/>
    
                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
        )
    }
}

export default EmployeesAddform;