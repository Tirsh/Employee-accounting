import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ""
        }
    }

    onValueChange = (e) => {
        const term = e.target.value;
        this.setState({
            inputVal: term
        });
        this.props.onUpdateSearch(term);
    }

    render() {
        const {inputVal} = this.state;
        return (
            <input 
                onChange={this.onValueChange}
                type="text"
                value={inputVal}
                className="form-control search-input"
                placeholder="Найти сотрудника" />
       );
    }

}

export default SearchPanel;