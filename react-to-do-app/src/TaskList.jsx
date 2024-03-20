
import React from "react";
import { Button, Form } from "react-bootstrap";
import DeleteTaskModal from "./DeleteTaskModal";
import EditModal from "./EditModal";
import { ViewList, Pencil, Trash2Fill } from 'react-bootstrap-icons';


const TaskList = ({
    list,
    editindex,
    edittask,
    setEditTask,
    onEdit,
    handleNewTask,
    cancelEdit,
    updateStatus,
    openDesc,
    handleConf,
    editmodalShow,
    seteditmodalShow,
    opentask,
    setOpenTask,
    handleSaveDesc,
    deletetaskmodalShow,
    setdeletetaskShow,
    handleDeleteTask
}) => {
    return (
        <div className="list-container">
            {list.length === 0 ? (
                <div className="no-task text-center mt-3">No work to do. Wooh!</div>
            ) : (
                list.map((tasktodo, i) => (
                    <div key={i} className="list-card align-items-center d-flex flex-row text-center rounded mt-4 p-2"
                        style={{ backgroundColor: tasktodo.completed ? "#ecdcf7" : "none" }}>


                        <Form.Check
                            type="checkbox"
                            checked={tasktodo.completed}
                            onChange={() => updateStatus(i)}
                            className="checkbox me-3"
                        />


                        <div className="col task-title" style={{ textDecoration: tasktodo.completed ? 'line-through' : 'none' }}>
                            {editindex === i ? (
                                <Form onSubmit={(e) => {
                                    e.preventDefault();
                                    if (edittask.trim() !== "") {
                                        handleNewTask(i);
                                    } else {
                                        alert("Please fill out the task title.");
                                    }
                                }}>
                                    <Form.Group controlId="taskTitle">
                                        <Form.Control
                                            type="text"
                                            value={edittask}
                                            onChange={(e) => setEditTask(e.target.value)}
                                            placeholder="Task Title"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please fill out the task title.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Button variant="secondary mt-3 me-3" onClick={() => cancelEdit()}>Cancel</Button>
                                    <Button variant="primary mt-3 me-3" type="submit">Save</Button>
                                </Form>
                            ) : (
                                <div className='text-start'> {tasktodo.tasktitle} </div>
                            )}
                        </div>


                        <div className="col">{new Date(tasktodo.date).toLocaleString()}</div>


                        <div className="mini-options-wrap col row ">
                            {editindex === i ? (
                                <>
                                    Editing...
                                </>
                            ) : (
                                <>

                                    <div className="mini-option edittask col-1" onClick={() => onEdit(i)}><Pencil /></div>
                                    <div className="mini-option deletetask col-1" onClick={() => handleConf(tasktodo.id)}><Trash2Fill /></div>
                                </>
                            )}
                        </div>


                        <EditModal
                            modalShow={editmodalShow}
                            modalClose={() => seteditmodalShow(false)}
                            task={opentask}
                            onEditDescription={(description) => setOpenTask({ ...opentask, description })}
                            handleSaveDesc={handleSaveDesc}
                        />

                        <DeleteTaskModal
                            modalShow={deletetaskmodalShow}
                            modalClose={() => setdeletetaskShow(false)}
                            onDelete={handleDeleteTask}
                        />
                    </div>
                ))
            )}
        </div>
    );
};


export default TaskList;
