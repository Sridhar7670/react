const { admin_model } = require("../model/admin_model")
let bcrypt=require('bcrypt')
var jwt = require('jsonwebtoken');
const admin_registration=async(req,res)=>{
    try {
        const hashed_password=await bcrypt.hash(req.body.Password,10)
        let data=new admin_model({...req.body,"Password":hashed_password})
        await data.save()
        res.json('admin registration sucessfull')
    } catch (error) {
        console.log(error.message)
        res.json({"error":"error in admin registration"})
    }
}
const admin_login=async (req,res)=>{
  try {
    const data=await admin_model.findById({"_id":req.body._id})

    if(data){
        let flag=bcrypt.compare(req.body.Password,data.Password)
        if(flag){
            var token = jwt.sign({ "_id":data._id}, process.env.SECRET_KEY);
            res.json({"token":token,"name":data.Name})
        }
        else{
            res.json({"message":"check the password "})
        }
    }
    else{
        res.send('please register')
    }
  } catch (error) {
    console.log(error.message)
    res.json({"error":"error in admin login"})
  }
}
module.exports={admin_registration,admin_login}

