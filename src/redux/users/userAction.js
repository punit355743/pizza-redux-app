import { FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCESS } from "./userType"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSucess = (users) => {
    return {
        type: FETCH_USER_SUCESS,
        payload: users
    }
}

export const fetchUserError = (error) => {
    return {
        type: FETCH_USER_ERROR,
        payload: error
    }
}