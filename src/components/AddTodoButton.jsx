import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/features/TodoSlice';

const AddTodoButton = () => {
    const dispatch = useDispatch();
    return (
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Button onClick={() => dispatch(addTodo())} className="mb-3 text-right">
                Add To Do
            </Button>
        </div>
    )
}

export default AddTodoButton;