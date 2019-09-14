import { FETCH_PENDING, FETCH_TODOS_SUCCESS, FETCH_ERROR, ADD_TODO_SUCCESS, DELETE_TODO_SUCCESS, EDIT_TODO_START } from "./actions";

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
                pending: false,
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
        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                pending: false,
                todos: [...state.todos.filter(t => t.id !== action.id)]
            }
        case EDIT_TODO_START:
            return {
                ...state,
                pending: false,
                todos: [...state.todos.map(t => t.id === action.payload.id ? action.payload : t)]
            }
        default : return state;
    }
};

export const getTodos = state => state.todos;
export const getPending = state => state.pending;
export const getError = state => state.error;