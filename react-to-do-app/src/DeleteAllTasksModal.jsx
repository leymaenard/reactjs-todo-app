import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DeleteAllTasksModal = ({ modalShow, modalClose, onDeleteAll }) => {
    return (
        <Modal show={modalShow} onHide={modalClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Delete all esisting Tasks?</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onDeleteAll}>Delete All</Button>
                <Button variant="secondary" onClick={modalClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default DeleteAllTasksModal;
