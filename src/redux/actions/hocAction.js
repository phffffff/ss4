import React from "react"

const actionCreater = (type, payload) => {
    return {
        type,
        payload,
    }
}

export {
    actionCreater,
}