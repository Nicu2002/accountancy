// @flow
import { createSlice } from '@reduxjs/toolkit';

type State = {
    users: Array<{}>,
    filter: string
}

const initialState = {
    users: [],
    filter: ''
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        initUsers(state, action) {
            state.users = [...action.payload];
        },
        addUser(state, action) {
            state.users = [...state.users, action.payload];
        },
        setFilter(state, action) {
            state.filter = action.payload;
        }
    }
})


export const {addUser, setFilter, initUsers} = usersSlice.actions;
export default usersSlice.reducer;

