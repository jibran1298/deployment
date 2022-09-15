import ActionTypes from "../../utils/actions.type"

const INITIAL_STATE = {
    data: {}
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state
    }
}

export default authReducer