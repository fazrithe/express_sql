// const bodyParser = require('body-parser
const express = require('express'),
path = require('path')
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
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users', usersRouter);

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname,'views') + '/input.html');
});

app.listen(server.port, () => console.log(`Server started, listening on server : ${server.port}`))
