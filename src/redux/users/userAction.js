import { FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCESS } from "./userType"
import axios from 'axios'

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

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                const users = response.data;
                dispatch(fetchUserSucess(users))
            })
            .catch(function (error) {
                // handle error
                const errorm = error.message;
                dispatch(FETCH_USER_ERROR(errorm))
            })
    }
}

