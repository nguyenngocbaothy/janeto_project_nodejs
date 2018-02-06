var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var db = require('./db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(express.static('public'));

app.listen(8081, function () {
    console.log("Ung dung Node.js dang lang nghe tai dia chi: http://localhost:8081");
})