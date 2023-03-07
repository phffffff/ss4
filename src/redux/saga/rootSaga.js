import { all } from 'redux-saga/effects'

import * as ACTION_SAGA from './actionSagas/todoSaga'


function* rootSaga() {
    yield all([
        ACTION_SAGA.watchGetDataApiSaga(),
        ACTION_SAGA.watchPostDataApiSaga(),
        ACTION_SAGA.watchCheckDataApiSaga(),
        ACTION_SAGA.watchRejectDataApiSaga(),
        ACTION_SAGA.watchDelDataApiSaga(),
    ])

}

export { rootSaga }