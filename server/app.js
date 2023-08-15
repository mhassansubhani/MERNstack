
const dotenv=require("dotenv");
dotenv.config(); // loading env variables
const express = require('express'); 
const app = express(); 
require("./db/conn")

app.use(express.json()); //middleware used to parse data

app.use(require("./router/auth")); //: This is how you tell Express to use the middleware for every room (route) in your application.

app.get('/contact',(req,res)=>{
    res.cookie("test",'hassan');
    res.send("hello this is contact pog") 
}) 


const PORT=process.env.PORT; //takiing value from .env file of port


app.listen(PORT,()=>{
    console.log(`"Server is running on port ${PORT}`);
})