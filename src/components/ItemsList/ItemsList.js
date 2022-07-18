import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState} from 'react';
import {List, Button} from 'antd';
import 'antd/dist/antd.css';
import './ItemsList.css';

import UsersService from './../../Services/usersService';
import {onDelete, onDataLoaded} from './itemListService';


const usersService = new UsersService();

const ItemsList = () => {

    const dispatch = useDispatch();
    const {users, filter, filterName} = useSelector(state => state.users);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        setisLoading(true);
        usersService.getAllData(filter, filterName)
          .then((newItems) => onDataLoaded(newItems, dispatch, setisLoading));
    }, [filter, filterName]);
    
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
                <Button type="primary" danger onClick={() => onDelete(item.id, users, dispatch)}>
                    Delete
                </Button>
            </List.Item>
        )}/>

    );
}

export default ItemsList;