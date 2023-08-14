
const dotenv=require("dotenv");
dotenv.config(); // loading env variables
const express = require('express'); 
const app = express(); 



require("./db/conn") //connection being established 
// const User=require("./model/userSchema");




app.use(express.json()); //middleware used to parse data

app.use(require("./router/auth")); //: This is how you tell Express to use the middleware for every room (route) in your application.




const PORT=process.env.PORT; //takiing value from .env file of port

//middle ware
const middleware=(req,res,next)=>{
    console.log("Middleware is running");
next();
}

// app.get("/", (req,res)=>{ 
//     res.send("Hello World");
// })

app.get("/about", middleware,(req,res)=>{
    console.log("About page is running");
    res.send("Hello from about page");
})
app.listen(PORT,()=>{
    console.log(`"Server is running on port ${PORT}`);
})