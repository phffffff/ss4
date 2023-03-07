import axios from "axios";

import * as CONSTANTS from "../constants/constants"

const setDataApi = (payload) => {
    return {
        type: CONSTANTS.SET_DATA_LIST,
        payload,
    }
}

const setLoading = () => {
    return {
        type: "SET_LOADING",
    }
}

export {
    setDataApi,
    setLoading,
}