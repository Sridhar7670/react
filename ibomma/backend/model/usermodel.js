const mongoose=require('mongoose')
const user_schema=new mongoose.Schema({
    "_id": String ,
  "password": { type: String, required: true },
  "name": String
})
const user_model=mongoose.model('user_pages',user_schema);
module.exports={user_model}