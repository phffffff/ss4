import axios from "axios";

import * as CONSTANTS from "../constants/constants"

const getDataApi = () => {
    return (dispatch) => {
        const api = 'http://svcy.myclass.vn/api/ToDoList/GetAllTask';
        const promise = axios({
            url: api,
            method: 'get',
        })

        promise
            .then((res) => {
                dispatch({
                    type: CONSTANTS.SET_DATA_LIST,
                    payload: res,
                });
            })
            .catch(res => {
                alert(res.message)
            })
    }
}

const postDataApi = (stateTodo) => {
    return (dispatch) => {
        const { err, value } = stateTodo;
        let isValid = true;
        console.log(value);

        for (const key in err) {
            if (err[key].trim() !== '') {
                isValid = false;
            }
        }

        if (!value.newTast) {
            isValid = false
        }

        if (isValid) {
            const promise = axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
                method: 'post',
                data: {
                    taskName: value.newTast,
                },
            })

            promise
                .then((res) => {
                    dispatch(getDataApi())
                })
                .catch((res) => {
                    alert(res.message)
                })
        } else {
            alert("Vui lòng nhập task!");
            return;
        }
    }
}

const checkDataApi = (task) => {
    return (dispatch) => {
        const promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${task}`,
            method: 'put',
        })

        promise
            .then((res) => {
                dispatch(getDataApi());
            })
            .catch(res => {
                alert(res.message)
            })
    }
}

const rejectDataApi = (task) => {
    return (dispatch) => {
        const promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${task}`,
            method: 'put',
        })

        promise
            .then((res) => {
                dispatch(getDataApi());
            })
            .catch(res => {
                alert(res.message)
            })
    }
}

const delDataApi = (task) => {
    return (dispatch) => {
        const promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${task}`,
            method: 'delete',
        })

        promise
            .then((res) => {
                dispatch(getDataApi());
            })
            .catch((res) => {
                alert(res.message);
            })
    }
}

export {
    getDataApi,
    postDataApi,
    checkDataApi,
    rejectDataApi,
    delDataApi,
}