import { FETCH_TODOS_PENDING, FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR } from "./actions";

const initialState = {
    pending: false,
    todos: [],
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                pending: false,
                todos: action.payload
            }
        case FETCH_TODOS_ERROR:
            return {
                ...state,
                pending: true,
                error: action.error
            }
        default : return state;
    }
};

export const getTodos = state => state.todos;
export const getPending = state => state.pending;
export const getError = state => state.error;