import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '../components/App/usersSlice';


const reducer = {
    users: usersReducer
}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;
