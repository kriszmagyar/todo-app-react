const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/ping', (req, res) => {
 return res.sendStatus(200);
});

app.listen(process.env.PORT || 8080);
console.log('Server started on 8080');