import { fetchTodosPending, fetchTodosError, fetchTodosSuccess } from "../store/actions";


const fetchTodos = () => dispatch => {
    dispatch(fetchTodosPending());
    fetch('/api/todos')
        .then(res => res.status === 200
            ? res.json()
            : dispatch(fetchTodosError(res.statusText))
        )
        .then(res => dispatch(fetchTodosSuccess(res)))
        .catch(err => dispatch(fetchTodosError(err)))
}

export default fetchTodos;