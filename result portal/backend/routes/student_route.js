let express=require('express')
const { student_registartion, get_hallticket_number, get_results } = require('../controller/student_controller')
const { middleware } = require('../controller/middlewares')
let route=new express.Router()

route.post('/student_registartion',student_registartion)
route.post('/get_hallticket_number',get_hallticket_number)
route.post('/get_results',middleware,get_results)

module.exports={route}