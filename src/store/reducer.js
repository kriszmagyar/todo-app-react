import { FETCH_PENDING, FETCH_TODOS_SUCCESS, FETCH_ERROR, ADD_TODO_SUCCESS } from "./actions";

const initialState = {
    pending: false,
    todos: [],
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_ERROR:
            return {
                ...state,
                pending: true,
                error: action.error
            }
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                pending: false,
                todos: action.payload
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                pending: false,
                todos: [...state.todos, action.payload]
            }
        default : return state;
    }
};

export const getTodos = state => state.todos;
export const getPending = state => state.pending;
export const getError = state => state.error;