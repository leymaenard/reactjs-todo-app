import React, { useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditModal = ({ modalShow, modalClose, task, onEditDescription, handleSaveDesc, setShowSuccessModal }) => {
    // const [description, setDescription] = useState(task.description);
    const textAreaRef = useRef(null);

    useEffect(() => {
        if (modalShow && textAreaRef.current) {
            textAreaRef.current.focus();
            const length = task.description.length;
            textAreaRef.current.setSelectionRange(length, length);
        }
    }, [modalShow, task.description]);

    const handleSave = () => {
        handleSaveDesc(task.id, task.tasktitle, task.description);
        modalClose();
        setShowSuccessModal(true);
    };

    return (
        <Modal show={modalShow} onHide={modalClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{task.tasktitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    ref={textAreaRef}
                    as="textarea"
                    placeholder="Description"
                    value={task.description}
                    onChange={(e) => onEditDescription(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={modalClose}>Cancel</Button>
                <Button variant="primary" onClick={handleSave}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditModal;
