
// imports the express module 
const express = require('express');
const connectDB = require('./config/db');
// creates an instance of express 
const app = express();

//Connect Database
connectDB();

app.get('/',(req,res)=>{
    res.send("<h1>Works</h1>");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
});