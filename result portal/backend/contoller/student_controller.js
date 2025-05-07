const { student_model } = require("../model/student_model")

const get_results=async(req,res)=>{
    try {
        const object=await student_model.findById(req.body._id);
        res.json(object)
    } catch (error) {
        console.log(error.message)
        res.json({"error":"error in getting student results"})
    }
}
const student_registartion=async(req,res)=>{
    try {
        let hallicket_number=Math.floor(Math.random()*999999+100000)
        let data=new student_model({...req.body,"_id":hallicket_number})
        await data.save()
        res.json({"student registration sucessfull hallticket is ":hallicket_number})
    } catch (error) {
        console.log(error.message)
        res.json({"error":"error in student registration"})
    }
}

const get_hallticket_number=async(req,res)=>{
    try {
        const object=await student_model.find({"Email":req.body.Email})
        res.json(object)
    } catch (error) {
        console.log(error.message)
        res.json({"error":"error in getting student hallticket"})
    }
}
module.exports={get_hallticket_number,get_results,student_registartion}