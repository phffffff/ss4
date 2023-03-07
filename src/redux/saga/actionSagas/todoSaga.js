import { takeLatest, call, put, delay } from 'redux-saga/effects'

import * as CONSTANTS from '../../constants/constants';
import * as services from '../../../services/todoListServices/todoListService'
import { setDataApi } from '../../actions/todoAction';
import { STATUS_SUCCESS } from '../../../utils/constants'
import { setLoading } from '../../actions/todoAction'


//get_action_saga
function* getDataApiSaga() {
    yield put(setLoading());

    yield delay(1000)

    try {
        const { data, status } = yield call(services.serviceGetDataApi)
        if (status === STATUS_SUCCESS) {
            yield put(setDataApi(data))
        }

        yield put(setLoading());

    } catch (err) {
        alert(err.message);
    }
}
function* watchGetDataApiSaga() {
    yield takeLatest(CONSTANTS.GET_ACTION_DATA_API, getDataApiSaga)
}

//post_action_saga
function* postDataApiSaga(action) {
    const { payload } = action;
    try {
        const { status } = yield call(() => { return services.servicePostDataApi(payload) })

        if (status === STATUS_SUCCESS) {
            yield put({
                type: CONSTANTS.GET_ACTION_DATA_API
            })
        }
    } catch (err) {
        console.log(err.message)
    }
}
function* watchPostDataApiSaga() {
    yield takeLatest(CONSTANTS.POST_ACTION_DATA_API, postDataApiSaga)
}

//check_action_saga
function* checkDataApiSaga(action) {
    const { payload } = action;
    try {
        const { status } = yield call(() => { return services.serviceCheckDataApi(payload) })

        if (status === STATUS_SUCCESS) {
            yield put({
                type: CONSTANTS.GET_ACTION_DATA_API
            })
        }
    } catch (error) {
        console.log(error)
    }
}
function* watchCheckDataApiSaga() {
    yield takeLatest(CONSTANTS.CHECK_ACTION_DATA_API, checkDataApiSaga)
}

//reject_action_saga
function* rejectDataApiSaga(action) {
    const { payload } = action
    console.log(payload)
    try {
        const { status } = yield call(() => { return services.serviceRejectDataApi(payload) })

        if (status === STATUS_SUCCESS) {
            yield put({
                type: CONSTANTS.GET_ACTION_DATA_API
            })
        }
    } catch (error) {
        console.log(error)
    }
}
function* watchRejectDataApiSaga() {
    yield takeLatest(CONSTANTS.REJECT_ACTION_DATA_API, rejectDataApiSaga)
}

//del_action_saga
function* delDataApiSaga(action) {
    const { payload } = action
    try {
        const { status } = yield call(() => { return services.serviceDelDataApi(payload) })

        if (status === STATUS_SUCCESS) {
            yield put({
                type: CONSTANTS.GET_ACTION_DATA_API
            })
        }
    } catch (error) {
        console.log(error)
    }
}
function* watchDelDataApiSaga() {
    yield takeLatest(CONSTANTS.DEL_ACTION_DATA_API, delDataApiSaga)
}

export {
    watchGetDataApiSaga,
    watchPostDataApiSaga,
    watchCheckDataApiSaga,
    watchRejectDataApiSaga,
    watchDelDataApiSaga,
}