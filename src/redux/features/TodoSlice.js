import { createSlice } from '@reduxjs/toolkit';

//initail state of TodoSlice
const initialState = {};
const TodoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addTodo: (state, { payload }) => {

        },
        editTodo: (state, { payload }) => {

        },
        deleteTodo: (state, { payload }) => {

        },
    }
});

export const { addTodo, editTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;