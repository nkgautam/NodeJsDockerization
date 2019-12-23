'use strict'

var express = require("express");
const PORT = 8081;
const HOST = '0.0.0.0';

const app = express();

app.get('/',(req,res) => {
 res.send('Hello world \n');
});

app.listen(PORT,HOST);

console.log('server runing at 8081');
