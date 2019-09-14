import { fetchPending, fetchError, fetchTodosSuccess, addTodoSuccess, deleteTodoSuccess, editTodoStart } from "../store/actions";

export const fetchTodos = () => dispatch => {
    dispatch(fetchPending());
    fetch("/api/todos")
        .then(res => handleResponse(res))
        .then(res => dispatch(fetchTodosSuccess(res)))
        .catch(err => dispatch(fetchError(err.message)))
};

export const addTodo = todo => dispatch => {
    fetch("/api/todos", { method: "POST", headers, body: JSON.stringify(todo) })
        .then(res => handleResponse(res))
        .then(res => dispatch(addTodoSuccess(res)))
        .catch(err => dispatch(fetchError(err)))
}

export const deleteTodo = id => dispatch => {
    fetch(`/api/todos/${id}`, { method: "DELETE" })
        .then(res => handleResponse(res))
        .then(res => dispatch(deleteTodoSuccess(id)))
        .catch(err => dispatch(fetchError(err)))
}

export const editTodo = todo => dispatch => {
    dispatch(editTodoStart(todo));
    fetch(`/api/todos/${todo.id}`, { method: "PUT", headers, body: JSON.stringify(todo) })
        .then(res => handleResponse(res))
        .catch(err => dispatch(fetchError(err)))
}

const handleResponse = res => {
    if (res.status === 204) {
        return res;
    }
    if (res.ok) {
        return res.json();
    }
    throw new Error(res.statusText);
}

const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
};