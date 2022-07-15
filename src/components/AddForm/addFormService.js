import {v4 as uuid} from 'uuid';
import { message } from 'antd';
import UsersService from './../../Services/usersService';
import {addUser} from '../App/usersSlice';

export const onAddItem = ({ name, job, city, email, phoneNumber}, dispatch) => {
    const userService = new UsersService();

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
    message.success("User added!", 2);
}

export const onValueChange = (e, dataState, dataSetState) => {
    dataSetState({ ...dataState, [e.target.name]: e.target.value });
}