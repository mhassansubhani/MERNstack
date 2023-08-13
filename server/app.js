const mongoose=require("mongoose");

const express = require('express'); 
const app = express(); 

  //DB connection
  const db="mongodb+srv://hassan:hassan@cluster0.8cifmpw.mongodb.net/Cluster0?retryWrites=true&w=majority"
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