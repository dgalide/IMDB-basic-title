const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let db_url = 'mongodb://localhost:27017/canal';

const title = require('./routes/title.route');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, GET');
    next();
});

let port = 1234;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/title', title);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

// Set up mongoose connection
let mongoDB = db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));