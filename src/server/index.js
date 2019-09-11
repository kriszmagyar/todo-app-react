const express = require('express');
const app = express();

let { todos } = require('./todos');

app.use(express.urlencoded());
app.use(express.json());

app.get('/api/todos', (req, res) => {
    return res.send(todos);
});

app.get('/api/todos/:id', (req, res) => {
    const id = +req.params.id;
    const todo = todos.find(t => t.id === id);

    return typeof todo === 'undefined'
        ? res.status(404).send(`Todo with id ${id} is not found!`)
        : res.send(todo);
});

app.post('/api/todos', (req, res) => {
    console.log(req.body);
})

app.listen(process.env.PORT || 8080);
console.log('Server started on 8080');