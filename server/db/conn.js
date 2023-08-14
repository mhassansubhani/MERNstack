const mongoose = require("mongoose");
const db=process.env.DATABASE;
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("DB is connected");
}).catch((err)=>{
    console.log("DB is not connected");
})

