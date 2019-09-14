import { fetchPending, fetchError, fetchTodosSuccess, addTodoSuccess, deleteTodoSuccess } from "../store/actions";

export const fetchTodos = () => dispatch => {
    dispatch(fetchPending());
    fetch("/api/todos")
        .then(res => res.json())
        .then(res => dispatch(fetchTodosSuccess(res)))
        .catch(err => dispatch(fetchError(err)))
};

export const addTodo = todo => dispatch => {
    fetch("/api/todos", { method: "POST", headers, body: JSON.stringify(todo) })
        .then(res => res.json())
        .then(res => dispatch(addTodoSuccess(res)))
        .catch(err => dispatch(fetchError(err)))
}

export const deleteTodo = id => dispatch => {
    fetch(`/api/todos/${id}`, { method: "DELETE" })
        .then(res => dispatch(deleteTodoSuccess(id)))
        .catch(err => dispatch(fetchError(err)))
}

const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
};