const { user_model } = require("../model/model")
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const register=async(req,res)=>{
    try{
        hashed_password=await bcrypt .hash(req.body.password,10)
        const data=new user_model({...req.body,"password":hashed_password});
        await data.save()
        res.json({"msg":"login sucessfull"})

    }catch(err){
        console.log(err.message)
    }
}

const login=async(req,res)=>{
    try {
        const obj=await user_model.findById({"_id":req.body._id})
        if(obj){
            f=await bcrypt.compare(req.body.password,obj.password)
            if(f) {
                res.json({"token":jwt.sign({"_id":obj._id},"abcd"),"name":obj.name})
            }else{res.json({"msg":"please check the password "})}
        }
        else{
            res.json({"msg":"user not found"})
        }
    } catch (err) {
        
    }
}

module.exports={login,register}