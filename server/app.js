const mongoose=require("mongoose");
const dotenv=require("dotenv");

const express = require('express'); 
const app = express(); 
//hello

dotenv.config({path:"./.env"});



  //DB connection
  const db=process.env.DATABASE;
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("DB is connected");
}).catch((err)=>{
    console.log("DB is not connected");
})
//middle ware
const middleware=(req,res,next)=>{
    console.log("Middleware is running");
next();
}

app.get("/", (req,res)=>{
    res.send("Hello World");
})
app.get("/about", middleware,(req,res)=>{
    console.log("About page is running");
    res.send("Hello from about page");
})
app.listen(5000,()=>{
    console.log("Server is running on port 3000");
})