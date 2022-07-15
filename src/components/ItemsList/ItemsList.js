import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState} from 'react';
import {List, Button} from 'antd';
import 'antd/dist/antd.css';
import './ItemsList.css';

import {initUsers} from '../App/usersSlice';
import UsersService from './../../Services/usersService';

const ItemsList = () => {
    const usersService = new UsersService();

    const dispatch = useDispatch();
    const {users, filter} = useSelector(state => state.users);

    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        usersService.getAllData(filter)
          .then(onDataLoaded);
    }, [filter]);
    
    function onDataLoaded(newItems) {
        dispatch(initUsers(newItems))
        setisLoading(false);
    }
    
    const onDelete = (id) => {
        const data = users.filter(item => item.id !== id);
        dispatch(initUsers(data));
    }

    return (
        <List loading={isLoading} bordered className="list-group" dataSource={users} renderItem={(item)=>(
            <List.Item className="d-flex justify-content-between align-items-center">
                <h5><b>{item.name}</b></h5>
                <div className="job-info">
                    <div className="job fw-bold">{item.job}</div>
                    {item.city}
                </div>
                <div className="contacts-info">
                    <b>Email : </b>{item.email}<br/>
                    <b>Phone number : </b>{item.phoneNumber}
                </div>
                <Button type="primary" danger onClick={() => onDelete(item.id)}>
                    Delete
                </Button>
            </List.Item>
        )}/>

    );
}

export default ItemsList;