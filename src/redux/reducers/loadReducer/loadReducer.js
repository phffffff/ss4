const initState = {
    isLoading: false
}

const loadReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                isLoading: !state.isLoading
            }

        default:
            return { ...state }
    }
}

export default loadReducer;