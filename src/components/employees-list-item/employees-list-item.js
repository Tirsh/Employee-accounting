import './employees-list-item.css';

const EmployeesListItem = (props) => {
    const {name, salary, increase, rise, onDelete, onToggleProp} = props;
    let classes = `list-group-item d-flex justify-content-between${increase ? " increase" : ""}${rise ? " like" : ""}`;
    return (
        <li className={classes}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                    data-toggle="increase"
                    type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;