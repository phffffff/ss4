import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import createMiddleWareSaga from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import { rootSaga } from './saga/rootSaga'

const middleWareSaga = createMiddleWareSaga()

const store = createStore(rootReducer, applyMiddleware(thunk, middleWareSaga/*createMiddleWareSaga()*/))

middleWareSaga.run(rootSaga)
// createMiddleWareSaga().run(rootSaga)

export default store;