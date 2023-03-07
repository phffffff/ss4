import React from "react"

const initState = {
    component: <p>Rỗng</p>
}

const hocReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_COMPONENT':
            return {
                ...state,
                component: action.payload,
            }
        default:
            return { ...state }
    }
}

export default hocReducer;