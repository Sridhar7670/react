let mongoose=require('mongoose')
let admin_schema=new mongoose.Schema({
    "_id":String,
    "Name":String,
    "Email":String,
    "Password":String
});


let admin_model=mongoose.model("Admins",admin_schema)
module.exports={admin_model}