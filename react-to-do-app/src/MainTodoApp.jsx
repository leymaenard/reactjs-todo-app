import React, { useState, useEffect } from "react";
import DeleteAllTasksModal from "./DeleteAllTasksModal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Logo from "/logo/lexmeet.png";
import Img from "/logo/stockbanner.jpg";


const MainTodoApp = () => {

    const [deletemodalShow, setdeletemodalShow] = useState(false);
    const [deletetaskmodalShow, setdeletetaskShow] = useState(false);
    const [tasktodelete, setDeleteTask] = useState(null);
    const [edittask, setEditTask] = useState("");
    const [editindex, seteditIndex] = useState(-1);
    const [opentask, setOpenTask] = useState({
        id: "",
        tasktitle: "",
    });
    const updateStatus = (i) => {
        let newList = [...list];
        newList[i].completed = !newList[i].completed;
        setList(newList);
    }
    const deleteTask = (taskId) => {
        let newList = list.filter(task => task.id !== taskId);
        setList(newList);
    }

    const handleRemoveAll = () => {
        setdeletemodalShow(true);
    }
    const handleDeleteAllTasks = () => {
        setList([]);
        setdeletemodalShow(false);
    }
    const markDone = () => {
        const updatedList = list.map(tasktodo => ({
            ...tasktodo,
            completed: true,
        }));
        setList(updatedList);
    }

    const markUndone = () => {
        const updatedList = list.map(tasktodo => ({
            ...tasktodo,
            completed: false,
        }));
        setList(updatedList);
    }
    const removeAllDone = () => {
        const updatedList = list.filter(tasktodo => !tasktodo.completed);
        setList(updatedList);
    }

    const handleConf = (taskId) => {
        setDeleteTask(taskId);
        setdeletetaskShow(true);
    }

    const handleDeleteTask = () => {
        deleteTask(tasktodelete);
        setdeletetaskShow(false);
    }

    const onEdit = (i) => {
        seteditIndex(i);
        setEditTask(list[i].tasktitle);
    }

    const handleNewTask = (i) => {
        let newList = [...list];
        newList[i].tasktitle = edittask;
        setList(newList);
        seteditIndex(-1);
        setEditTask("");
    }

    const cancelEdit = () => {
        seteditIndex(-1);
        setEditTask("");
    }


    const getList = () => {
        let list = localStorage.getItem("list");
        let listData = JSON.parse(list);
        if (listData) {
            return listData;
        }
        return [];
    }

    const [list, setList] = useState(getList());

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    return (
        <div className="main-container m-5">
            <div className="main-wrap pb-1">

                <div className='header-wrap d-flex justify-content-center align-items-center'>


                    <div className="wrap d-flex justify-content-center align-items-center">
                        <img className='logo' src={Logo} alt="" />
                        <h1 className="lexmeet-title">LexMeet</h1>
                    </div>

                    <img className='img-cover position-absolute bottom-20' src={Img} alt="" />

                </div>


                <div className="add-task-wrap">
                    <AddTask
                        list={list}
                        setList={setList}

                    />

                </div>

                <div className="main-options-wrap row">


                    <div className="button-wrap col">
                        <p className='option-button' onClick={markDone} >All Complete</p>
                    </div>
                    <div className="button-wrap col">
                        <p className='option-button' onClick={markUndone} >All Incomplete</p>
                    </div>
                    <div className="button-wrap col">
                        <p className='option-button' onClick={removeAllDone} >Delete Complete</p>
                    </div>
                    <div className="button-wrap col">
                        <p className='option-button' onClick={handleRemoveAll} >Clear All</p>
                    </div>

                    <DeleteAllTasksModal
                        modalShow={deletemodalShow}
                        modalClose={() => setdeletemodalShow(false)}
                        onDeleteAll={handleDeleteAllTasks}
                    />
                </div>

                <div className="table-wrap mb-5 ms-2 me-2">
                    <div className="table-labels-wrap">
                        <div className="text-center row fw-bold">
                            {/* <div className="col"></div> */}
                            <div className="col">TASKS</div>
                            <div className="col">DATE ADDED</div>
                            <div className="col">OPTIONS</div>
                        </div>
                    </div>

                    <hr />

                    <div className="list-scrollable">

                        <TaskList
                            list={list}
                            editindex={editindex}
                            edittask={edittask}
                            setEditTask={setEditTask}
                            onEdit={onEdit}
                            handleNewTask={handleNewTask}
                            cancelEdit={cancelEdit}
                            updateStatus={updateStatus}
                            handleConf={handleConf}
                            opentask={opentask}
                            setOpenTask={setOpenTask}
                            handleDeleteTask={handleDeleteTask}
                            deletetaskmodalShow={deletetaskmodalShow}
                            setdeletetaskShow={setdeletetaskShow}
                        />
                    </div></div>





            </div>
        </div >
    );
}

export default MainTodoApp;
