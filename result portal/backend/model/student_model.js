let mongoose=require('mongoose')
let student_schema=new mongoose.Schema({
    "_id":String,
    "Name":String,
    "Email":String,
    "Dob":Date,
    "PhoneNumber":String,
    "Maths":Number,
    "Science":Number,

});

let student_model=mongoose.model("Students",student_schema)
module.exports={student_model}