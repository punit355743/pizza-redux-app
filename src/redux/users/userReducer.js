import { FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCESS } from "./userType"

const initailState = {
    loading: true,
    userData: [],
    error: ''
}

export const userReducer = (state = initailState, action) => {

    switch (action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_USER_SUCESS: return {
            ...state,
            loading: false,
            userData: action.payload,
            error: ''
        }
        case FETCH_USER_ERROR: return {
            ...state,
            loading: false,
            error: action.payload,
            userData: []
        }


        default: return state
    }


}