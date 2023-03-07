import Axios from 'axios';

import { DOMAIN } from '../../utils/constants';

const serviceGetDataApi = () => {
    return Axios({
        url: `${DOMAIN}/ToDoList/GetAllTask`,
        method: 'get',
    })
}
const servicePostDataApi = (payload) => {
    return Axios({
        url: `${DOMAIN}/ToDoList/AddTask`,
        method: 'post',
        data: {
            taskName: payload,
        }
    })
}

const serviceDelDataApi = (payload) => {
    return Axios({
        url: `${DOMAIN}/ToDoList/deleteTask?taskName=${payload}`,
        method: 'delete',
    })
}

const serviceCheckDataApi = (payload) => {
    return Axios({
        url: `${DOMAIN}/ToDoList/doneTask?taskName=${payload}`,
        method: 'put',
    })
}

const serviceRejectDataApi = (payload) => {
    return Axios({
        url: `${DOMAIN}/ToDoList/rejectTask?taskName=${payload}`,
        method: 'put',
    })
}

export {
    serviceGetDataApi,
    servicePostDataApi,
    serviceCheckDataApi,
    serviceDelDataApi,
    serviceRejectDataApi,
}