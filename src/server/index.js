const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/ping', (req, res) => {
    return res.sendStatus(200);
});

app.get('/api/todos', (req, res) => {
    return res.send([{ id: 1, title: 'Todo1' }, { id: 2, title: 'Todo2' }]);
})

app.listen(process.env.PORT || 8080);
console.log('Server started on 8080');