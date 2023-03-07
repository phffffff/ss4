import { combineReducers } from 'redux';

import todoReducer from './todoReducer/todoReducer';
import hocReducer from './hocReducer/hocReducer'
import loadReducer from './loadReducer/loadReducer'

const rootReducer = combineReducers({
    stateTodo: todoReducer,
    stateHoc: hocReducer,
    stateLoading: loadReducer,
});

export default rootReducer;
