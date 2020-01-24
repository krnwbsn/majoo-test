import axios from 'axios';

const API_URL = 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list';

const request = axios.create({
    baseUrl: API_URL,
    timeout: 1000
})

// load data
export const loadTodoSuccess = (todolist) => ({
    type: 'LOAD_TODO_SUCCESS',
    todolist
})

export const loadTodoFailure = () => ({
    type: 'LOAD_TODO_FAILURE'
})

export const loadTodo = () => {
    return dispatch => {
        return request.get('')
        .then(response => {
            dispatch(loadTodoSuccess(response.data))
        })
    }
}