const express=require('express');
const router=express.Router();
require("../db/conn");
const User=require("../model/userSchema");
router.get('/',(req,res)=>{
    res.send("hello hassan world");
})

router.post('/register',async(req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
 if(!name||!email||!phone||!work||!password||!cpassword)
 {
    res.status(422).json({error:"please fill all the fields"});
 }
 const userExist= await User.findOne({email:email});
if(userExist)
{
    res.status(422).json({error:"email already exist"});
}
else{
    const newUser=new User({name,email,phone,work,password,cpassword
       
})
await newUser.save();
res.status(200).json({message:"user registered successfully"});
}

})

router.post('/signin',async(req,res)=>{
    const {email,password}=req.body;
    const userEmail=await User.findOne({email:email});
    if(userEmail)
    {
        res.status(200).json({message:"user logged in successfully"});
    }
    else{
        res.status(422).json({error:"wrong credentials"});
    }
    console.log(userEmail);
})

module.exports=router;