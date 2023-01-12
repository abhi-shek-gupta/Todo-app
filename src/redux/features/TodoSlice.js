import { createSlice } from '@reduxjs/toolkit';

// Initialize state of TodoSlice
const initialState = [];
const TodoSlice = createSlice({
    name: 'Todos',
    initialState,
    reducers: {
        addTodo: (state, { payload }) => {
            console.log({ state, payload })
            // return { ...state, todos: [...state.todos, payload] }
        },
        editTodo: (state, { payload }) => {

        },
        deleteTodo: (state, { payload }) => {

        },
    }
});

export const { addTodo, editTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;