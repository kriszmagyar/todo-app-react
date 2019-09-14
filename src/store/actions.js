export const FETCH_TODOS_PENDING = 'FETCH_TODOS_PENDING';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';

export function fetchTodosPending() {
    return {
        type: FETCH_TODOS_PENDING
    }
};

export function fetchTodosSuccess(todos) {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: todos
    }
};

export function fetchTodosError(error) {
    return {
        type: FETCH_TODOS_ERROR,
        error
    }
};