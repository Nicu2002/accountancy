import {useState} from 'react';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';

import "./Filter.css";
import {setFilter} from '../App/usersSlice';
import DropDownFilter from './../DropDownFilter/DropDownFilter';


const Filter = () => {
    const [term, setTerm] = useState('');
    const [filterName, setFilterName] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(setFilter({term, filterName}));
    }

    const onChangeFilter = (filterName) => {
        setFilterName(filterName);
    }

    

    return (
        <>
        <form id="searchBar" onSubmit={onSubmit}>
            <input type="text" name="term" placeholder="Search" value={term} onChange={(e) => setTerm(e.target.value)}/>
            <Button
                variant="dark"
                onClick={()=> dispatch(setFilter({term, filterName}))}>
                go
            </Button>
        </form>
        <DropDownFilter onChangeFilter={onChangeFilter}/>
        <Button variant="danger" onClick={()=> dispatch(setFilter({term: '', filterName: ''}))}>Clear filter</Button>
        </>
    );
}

export default Filter;