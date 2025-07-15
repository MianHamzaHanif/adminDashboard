// src/features/customers/customersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loaded: false
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    resetUsers: (state) => {
      state.users = [];
      state.loaded = false;
    },
    setLoaded: (state, action) => {
      state.loaded = action.payload;
    },
  },
});

export const { setUsers, addUser, resetUsers, setLoaded } = customersSlice.actions;
export default customersSlice.reducer;
