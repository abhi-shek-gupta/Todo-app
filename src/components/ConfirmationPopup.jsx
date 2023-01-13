import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, closePopup } from '../redux/features/TodoSlice';

const ConfirmationPopup = () => {
    const { popup } = useSelector(state => state.todo);
    const dispatch = useDispatch();
    return (<Modal show={popup.show} onClick={() => dispatch(closePopup())}>
        <Modal.Body>Do You Really want to Delete this Task?</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => dispatch(closePopup())}>
                Close
            </Button>
            <Button variant="danger" onClick={() => dispatch(deleteTodo({ id: popup.id }))}>
                Delete
            </Button>
        </Modal.Footer>
    </Modal>)
};
export default ConfirmationPopup;