import React, { useState, useEffect } from 'react'
import { Button, Col, Form } from 'react-bootstrap';

export default function AddTask({ list, setList }) {///
    const [task, setTask] = useState({
        id: Math.random().toString(36).substr(2, 9),
        tasktitle: '',
        date: new Date(),
        ddate: null,
        time: null,
        completed: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Math.random().toString(36).substr(2, 9),
            tasktitle: task.tasktitle,
            date: task.date,
            ddate: task.ddate,
            time: task.time,
            completed: task.completed,
        };
        setList([...list, newTask]);
        setTask({
            id: Math.random().toString(36).substr(2, 9),
            tasktitle: "",
            date: new Date(),
            ddate: null,
            time: null,
            completed: false,
        });
    }

    return (
        <div>
            <div>
                <Form onSubmit={handleSubmit}>
                    <div className="main-form-wrap">
                        <div className='left-portion'>

                            <Button type="submit">Add Task</Button>

                        </div>
                        <div className='right-portion'>
                            <div>
                                <Form.Control type="text"
                                    className='mb-2'
                                    placeholder="Task Name" name="task"
                                    value={task.tasktitle}
                                    onChange={(e) => setTask({ ...task, tasktitle: e.target.value })}
                                    required
                                    fluid />
                            </div>

                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}