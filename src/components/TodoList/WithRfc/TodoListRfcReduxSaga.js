import { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import '../TodoList.css'
import bg from '../../../assets/img/bg.png';

// import { getDataApi, postDataApi, checkDataApi, rejectDataApi, delDataApi } from '../../../redux/actions/todoAciton'
import * as CONSTANTS from '../../../redux/constants/constants';

function TodoList() {
    const [stateTodo, setState] = useState({
        value: {
            newTast: '',
        },
        err: {
            newErr: '',
        },
    })

    const dispatch = useDispatch();
    const { todoList } = useSelector(state => state.stateTodo);

    const handleOnChangeInput = (e) => {
        const { name, value } = e.target;

        const re = /^[a-z A-Z]+$/;

        value.trim() ?
            (re.test(value)
                ?
                setState({
                    ...stateTodo,
                    value: {
                        ...stateTodo.value, [name]: value,
                    },
                    err: {
                        ...stateTodo.err, newErr: '',
                    },
                })
                :
                setState({
                    ...stateTodo,
                    value: {
                        ...stateTodo.value, [name]: '',
                    },
                    err: {
                        ...stateTodo.err, newErr: 'Sai định dạng',
                    },
                }))
            :
            setState({
                ...stateTodo,
                value: {
                    [name]: '',
                },
                err: {
                    newErr: ''
                }
            })
    }
    const handlePostData = (task) => {
        console.log(task);
        dispatch({
            type: CONSTANTS.POST_ACTION_DATA_API,
            payload: task
        })
    }

    const handleGetData = () => {
        dispatch({
            type: CONSTANTS.GET_ACTION_DATA_API,
        })
    }

    const handleCheckTask = (task) => {
        dispatch({
            type: CONSTANTS.CHECK_ACTION_DATA_API,
            payload: task,
        })
    }

    const handleRejectTast = (task) => {
        dispatch({
            type: CONSTANTS.REJECT_ACTION_DATA_API,
            payload: task,
        })
    }

    const handleDelTast = (task) => {
        dispatch({
            type: CONSTANTS.DEL_ACTION_DATA_API,
            payload: task,
        })
    }

    const renderTodoList = (flag) => {
        return (
            todoList && todoList.length &&
            todoList.filter((item) => item.status === flag).map((task, idx) => {
                return (
                    <li key={idx}>
                        <span>{task.taskName}</span>
                        <div className="buttons">
                            <button type='button' className="remove"
                                onClick={() => {
                                    handleDelTast(task.taskName)
                                }}
                            >
                                <i className="fa fa-trash-alt" />
                            </button>
                            {flag
                                ?
                                <button type='button' className="complete"
                                    onClick={() => { handleRejectTast(task.taskName) }}
                                >
                                    <i className="fa fa-undo" />
                                </button>
                                :
                                <button type='button' className="complete"
                                    onClick={() => { handleCheckTask(task.taskName) }}
                                >
                                    <i className="far fa-check-circle" />
                                </button>
                            }
                        </div>
                    </li >
                )
            })) || <></>
    }

    useEffect(() => {
        handleGetData();
        return () => { }
    }, [])

    return (
        <form className="card" onSubmit={(e) => {
            e.preventDefault();

            handlePostData(stateTodo.value.newTast)
        }}>
            <div className="card__header">
                <img src={bg} />
            </div>
            <div className="card__body">
                <div className="card__content">
                    <div className="card__title">
                        <h2>My Tasks</h2>
                        <p>September 9,2020</p>
                    </div>
                    <div className="card__add">
                        <input id="newTask" type="text" name='newTast' placeholder="Enter an activity..."
                            onChange={(e) => { handleOnChangeInput(e) }}
                        />
                        <button type='button' id="addItem"
                            onClick={() => { handlePostData(stateTodo.value.newTast) }}
                        >
                            <i className="fa fa-plus" />
                        </button>
                    </div>
                    <span className='text-danger pl-3'>{stateTodo.err.newErr}</span>
                    <div className="card__todo">
                        <ul className="todo" id="todo">
                            {renderTodoList(false)}
                        </ul>
                        <ul className="todo" id="completed">
                            {renderTodoList(true)}
                        </ul>
                    </div>
                </div>
            </div>
        </form>

    );
}

export default TodoList;