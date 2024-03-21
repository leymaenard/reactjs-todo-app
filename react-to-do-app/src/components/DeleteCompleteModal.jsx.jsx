import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DeleteCompleteModal = ({ modalShow, modalClose, onDeleteCom }) => {
    return (
        <Modal show={modalShow} onHide={modalClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete Completed Tasks</Modal.Title>
            </Modal.Header>
            <Modal.Body>Delete all marked complete Tasks?</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onDeleteCom}>Delete All</Button>
                <Button variant="secondary" onClick={modalClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default DeleteCompleteModal;
