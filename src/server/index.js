const express = require('express');
const app = express();

let { todos, getNextId } = require('./todos');

const SERVER_PORT = 8080;

app.use(express.json());

app.get('/api/todos', (req, res) => {
    return res.send(todos);
});

app.get('/api/todos/:id', (req, res) => {
    const id = +req.params.id;
    const todo = todos.find(t => t.id === id);

    return !todo
        ? res.status(404).send(`Todo with id ${id} is not found!`)
        : res.send(todo);
});

app.post('/api/todos', (req, res) => {
    const { title } = req.body;

    if (title) {
        const newTodo = { id: getNextId(), title };
        todos.push(newTodo);
        res.location(`/api/todos/${newTodo.id}`);
        return res.status(201).send(newTodo);
    } else {
        return res.status(400).send('Missing or wrong parameters!');
    }
});

app.put('/api/todos/:id', (req, res) => {
    const id = +req.params.id;
    const { title } = req.body;
    const todo = todos.find(t => t.id === id);

    if (todo && title) {
        todo.title = title;
        return res.status(204).send();
    } else {
        return res.status(400).send("Invalid request!");
    }
});

app.delete('/api/todos/:id', (req, res) => {
    const id = +req.params.id;
    todos = todos.filter(t => t.id !== id);
    return res.status(204).send();
})

app.listen(process.env.PORT || SERVER_PORT, () => {
    console.log(`Server started on ${SERVER_PORT}.`);
});