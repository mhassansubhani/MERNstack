const express = require('express'); 
const app = express(); 

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