import axios from 'axios'
import {GET_TODOS_FETCHING, GET_TODOS_RECEIEVED,
    GET_TODOS_FAILED, DELETE_TODOS} from './constants'

export const getTodos = () => {
    return dispatch => {
        dispatch(getTodosFetching());
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                dispatch(getTodosReceieved(response.data));
            })
            .catch(error => {
                dispatch(getTodosFailed(error));
            });
    };
};

export const getTodosFetching = () => {
    return { type: GET_TODOS_FETCHING }
};

export const getTodosReceieved = (response) => {
    return { type: GET_TODOS_RECEIEVED, payload: response}
};

export const getTodosFailed = (error) => {
    return { type: GET_TODOS_FAILED, payload: error }
};

export const deleteTodos = () => {
    return { type: DELETE_TODOS }
};