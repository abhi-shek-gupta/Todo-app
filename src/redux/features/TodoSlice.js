import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    todos: [],
    isEdit: false,
    isCreate: false,
    editTodoValue: {}
};
const TodoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        createTodo: (state, { payload }) => {
            return { ...state, todos: [...state.todos, payload], isEdit: false, isCreate: false }
        },
        addTodo: (state, { payload }) => {
            return { ...state, isCreate: true, isEdit: false }
        },
        editTodo: (state, { payload }) => {
            return { ...state, isEdit: true, isCreate: false, editTodoValue: { ...payload } }
        },
        deleteTodo: (state, { payload }) => {
            return { ...state, todos: state.todos.filter(({ id }) => id !== payload.id) }
        },
        updateTodo: (state, { payload }) => {
            const todos = [...state.todos];
            const getIndex = todos.findIndex(todo => todo.id === payload.id);
            todos.splice(getIndex, 1, { ...payload });
            return {
                ...state, todos, isEdit: false
            }
        }
    }
});

export const { addTodo, editTodo, deleteTodo, updateTodo, createTodo } = TodoSlice.actions;
export default TodoSlice.reducer;