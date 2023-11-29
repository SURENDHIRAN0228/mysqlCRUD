const express = require('express')
const server = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./route/routes');

const cors = require('cors');


mongoose.connect("mongodb://127.0.0.1:27017/abc", { useNewUrlParser:true, useUnifiedTopology: true},
function checkDb(error)
{
    if(error)
    { 
        console.log(error);
    }
    else
    {
        console.log("successfully Connected to DB");
    }
});

server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(8000,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});
