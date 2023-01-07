import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/TodoSlice';

const reducer = {
    todo: todoReducer
};


// initialState of the redux
const preloadedState = {
};

const store = configureStore({
    reducer,
    preloadedState,
});

export default store;