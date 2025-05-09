const express=require('express')
const app=express();
const cors=require('cors')
const mongoose=require('mongoose');
const { route } = require('./routes/routes');

mongoose.connect("mongodb://127.0.0.1:27017/userlogin").then(()=>console.log("connection with db established ")).catch((err)=>console.log(err.message))


//middle wares
app.use(express.json())
app.use(cors())

//routes configuration 
app.use("/",route)


const port=process.env.PORT|| 5000;
app.listen(port ,()=>console.log(`server started at ${port}`));