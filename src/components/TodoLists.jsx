import React from 'react';
import { Table, Alert, Badge, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { editTodo, deleteTodo } from '../redux/features/TodoSlice';

const TodoList = () => {
    const { todos } = useSelector(state => state.todo);
    const dispatch = useDispatch();
    if (todos.length === 0) return (<Alert variant='info'>
        No Todo! Click Add To Do button to create one.
    </Alert>);
    return (<Table striped bordered hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Hobby</th>
                <th>Age</th>
                <th>Date</th>
                <th>Task Name</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {todos.map((todo) => (<tr key={todo.id}>
                <td>{todo.name}</td>
                <td>{todo.gender}</td>
                <td>{todo?.hobby?.join()}</td>
                <td>{todo.age}</td>
                <td>{`${todo.date}`}</td>
                <td>{todo.taskName}</td>
                <td>
                    {todo?.status === 'active' ? (
                        <Badge bg="success">Active</Badge>
                    ) : (
                        <Badge bg="danger">Inactive</Badge>
                    )}
                </td>
                <td>

                    <Button
                        variant='primary'
                        size='sm'
                        onClick={() => dispatch(editTodo({ ...todo }))}
                    >
                        Edit
                    </Button>

                    <Button
                        className="ms-1"
                        variant='danger'
                        size='sm'
                        onClick={() => dispatch(deleteTodo({ id: todo.id }))}
                    >
                        Delete
                    </Button>

                </td>
            </tr>))}

        </tbody>
    </Table>)
}

export default TodoList;