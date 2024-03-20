import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function DeleteModal(props) {
    const { taskid, title, date, time, completed, onHide, setList } = props;
    console.log()

    const handleDelete = (e) => {
        e.preventDefault();
        const tasks = JSON.parse(localStorage.getItem('task')) || {};
        delete tasks[taskid];

        localStorage.setItem('task', JSON.stringify(tasks));
        setList(Object.values(tasks));
        onHide();


    }
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className=''
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Delete Task</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleDelete}>
                    <Modal.Body>
                        <div className='alert-message'>
                            <p>Delete Task?</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}>
                            No
                        </Button>
                        <Button variant="primary" type='submit' onClick={handleDelete}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}
