import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DeleteTaskModal = ({ modalShow, modalClose, onDelete }) => {
    return (
        <Modal show={modalShow} onHide={modalClose}
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Delete this Task?
            </Modal.Body>
            <Modal.Footer>

                <Button variant="primary" onClick={onDelete}>Delete</Button>
                <Button variant="secondary" onClick={modalClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteTaskModal;
