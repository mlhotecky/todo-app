import {GET_TODOS_FETCHING, GET_TODOS_RECEIEVED,
    GET_TODOS_FAILED, DELETE_TODOS} from '../constants'

const initialState = {
    todos: [],
    fetching: false,
    error: {}
};

const mainReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case GET_TODOS_FETCHING:
            return {
                ...state,
                fetching: true
            };
        case GET_TODOS_RECEIEVED:
            return {
                ...state,
                todos: action.payload,
                fetching: false
            };
        case GET_TODOS_FAILED:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        case DELETE_TODOS:
            return {
                ...state,
                todos: []
            };
        default:
            return state
    }
};

export default mainReducer