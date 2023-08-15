const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
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
    if(password!==cpassword)
    {
        res.status(422).json({error:"passwords do not match"});
    }
    else{
        const newUser=new User({name,email,phone,work,password,cpassword});
        await newUser.save();
        res.status(200).json({message:"user registered successfully"});
    }
   
}

})

router.post('/signin',async(req,res)=>{
    const {email,password}=req.body;

    if(!email||!password)
    {
        res.status(422).json({error:"please fill all the fields"});
    }
   else{
    const userEmail=await User.findOne({email:email});
    if(!userEmail)
    {
        res.status(422).json({error:"wrong credentials"});
    }
    else{
        const isMatch=await bcrypt.compare(password,userEmail.password);

        let token=await userEmail.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+86400000),
          
        })



        if(!isMatch)
        {
            res.status(422).json({error:"wrong credentials"});
        }
        else{
            res.status(200).json({message:"user logged in successfully"});
        }
    }
   }
   


})

module.exports=router;