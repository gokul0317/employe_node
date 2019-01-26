const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./Controllers/employeeController')

var app = express();

app.use(bodyParser.json());
app.use(cors({origin : "http://localhost:4200"}));

app.listen( 3000 , () => console.log('connected to mongo'))


app.use('/employees' , employeeController )