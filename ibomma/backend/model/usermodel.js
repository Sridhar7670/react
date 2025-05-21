const mongoose=require('mongoose')
const user_schema=new mongoose.Schema({
    "_id":String,
    "password":String,
    "name":String
})
const user_model=mongoose.model('user_pages',user_schema);
module.exports={user_model}