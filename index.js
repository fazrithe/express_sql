// const bodyParser = require('body-parser')
const express = require('express'),
app = express(),
mysql = require('mysql'),
cors = require('cors'),
bodyParser = require('body-parser');


// setup database
db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express_db'
})

var server = {
    port: 4040
};

const usersRouter = require('./users');
// use the modules
app.use(cors())
app.use(bodyParser.json());

app.use('/users', usersRouter);

app.listen(server.port, () => console.log(`Server started, listening on server : ${server.port}`))
