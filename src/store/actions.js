export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';

export function fetchPending() {
    return {
        type: FETCH_PENDING
    }
};

export function fetchError(error) {
    return {
        type: FETCH_ERROR,
        error
    }
};

export function fetchTodosSuccess(todos) {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: todos
    }
};

export function addTodoSuccess(todo) {
    return {
        type: ADD_TODO_SUCCESS,
        payload: todo
    }
};

export function deleteTodoSuccess(id) {
    return {
        type: DELETE_TODO_SUCCESS,
        id
    }
};