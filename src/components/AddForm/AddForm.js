import {useState} from 'react';
import { Button } from 'antd';
import './AddForm.css';
import UsersService from './../../Services/usersService';
import {v4 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';
import {addUser} from '../App/usersSlice';


const userService = new UsersService();


const AddForm = () => {
    const itemObj = { name: '', job: '', city: '', email: '', phoneNumber: '', id: ''};
    const [dataState, dataSetState] = useState(itemObj);
    const dispatch = useDispatch();

    const onValueChange = (e) => {
        dataSetState({ ...dataState, [e.target.name]: e.target.value });
    }

    const { name, job, city, email, phoneNumber } = dataState;

    const onAddItem = () => {
        const item = { 
            id: uuid(),
            job: job,
            city: city,
            name: name,
            email: email,
            phoneNumber: phoneNumber
        };
        const result = { // on server keys are with uppercase
            id: item.id,
            Job: job,
            City: city,
            Name: name,
            Email: email,
            "Phone Number": phoneNumber
        };
        userService.postData(result);
        dispatch(addUser(item));
    } 

    return(
        <div className="app-add-form ms-5 bg-light border border-dark">
            <h3>Add new item</h3>
            <form className="add-form">
                <input type="text"
                    onChange={onValueChange}
                    className="form-control new-post-label"
                    placeholder="name"
                    name="name"
                    value={name}/>
                <input type="text" 
                    onChange={onValueChange}
                    className="form-control new-post-label"
                    placeholder="job"
                    name="job" 
                    value={job} />
                <input type="text"
                    onChange={onValueChange}
                    className="form-control new-post-label"
                    placeholder="city"
                    name="city"
                    value={city}/>
                <input type="text" 
                    onChange={onValueChange}
                    className="form-control new-post-label"
                    placeholder="email"
                    name="email" 
                    value={email} />
                <input type="text"
                    onChange={onValueChange}
                    className="form-control new-post-label"
                    placeholder="phone number"
                    name="phoneNumber"
                    value={phoneNumber}/>
                <Button
                    variant="success"
                    onClick={onAddItem}
                    >
                    Add
                </Button>
            </form>
        </div>
    );
}

export default AddForm;