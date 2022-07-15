import {useState} from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'antd';

import './AddForm.css';

import {onAddItem, onValueChange} from './addFormService';

const itemObj = { name: '', job: '', city: '', email: '', phoneNumber: '', id: ''};

const AddForm = () => {
    const [dataState, dataSetState] = useState(itemObj);
    const dispatch = useDispatch();

    const { name, job, city, email, phoneNumber } = dataState;

    return(
        <div className="app-add-form ms-5 bg-light border border-dark">
            <h3>Add new item</h3>
            <form className="add-form">
                <input type="text"
                    onChange={(e) => onValueChange(e, dataState, dataSetState)}
                    className="form-control new-post-label"
                    placeholder="name"
                    name="name"
                    value={name}/>
                <input type="text" 
                    onChange={(e) => onValueChange(e, dataState, dataSetState)}
                    className="form-control new-post-label"
                    placeholder="job"
                    name="job" 
                    value={job} />
                <input type="text"
                    onChange={(e) => onValueChange(e, dataState, dataSetState)}
                    className="form-control new-post-label"
                    placeholder="city"
                    name="city"
                    value={city}/>
                <input type="text" 
                    onChange={(e) => onValueChange(e, dataState, dataSetState)}
                    className="form-control new-post-label"
                    placeholder="email"
                    name="email" 
                    value={email} />
                <input type="text"
                    onChange={(e) => onValueChange(e, dataState, dataSetState)}
                    className="form-control new-post-label"
                    placeholder="phone number"
                    name="phoneNumber"
                    value={phoneNumber}/>
                <Button
                    variant="success"
                    onClick={() => onAddItem(dataState, dispatch)}
                    >
                    Add
                </Button>
            </form>
        </div>
    );
}

export default AddForm;