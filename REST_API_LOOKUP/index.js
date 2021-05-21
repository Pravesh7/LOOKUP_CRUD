const express = require('express');
const app= express();
var emp= require('./routes/emp_routes');
var user=require('./routes/user_routes');
var bodyParser = require("body-parser");
require('./database')


//Middleware and Routes
// app.use(express.json());

// body parser
app.use(bodyParser.urlencoded({
	extended: true,
    
}));
app.use(bodyParser.json());

app.use('/emp',emp);
app.use('/user',user);


app.listen(4000, () => console.log(" Server is Working"));