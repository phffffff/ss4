import { SET_DATA_LIST } from "../../constants/constants";

const initState = {
    todoList: []
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_DATA_LIST:
            let { payload } = action;
            return {
                ...state,
                todoList: [...payload]
            }
        default:
            return { ...state }
    }
}

export default todoReducer;