import {useState} from 'react';
import "./Filter.css";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import {setFilter} from '../App/usersSlice';

const Filter = () => {

    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    return (
        <form id="searchBar">
            <input type="text" name="term" placeholder="Search" value={term} onChange={(e) => setTerm(e.target.value)}/>
            <Button
                variant="dark"
                onClick={()=> dispatch(setFilter(term))}>
                go
            </Button>
        </form>
    );
}

export default Filter;