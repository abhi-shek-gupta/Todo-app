import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/TodoSlice';

const rootReducer = {
    todo: todoReducer
};


// initialState of the redux
const preloadedState = {
};


const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export default store;