const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const manual_route = require("./routes/route")
const port = process.env.PORT || 4000 
mongoose.connect("mongodb://127.0.0.1:27017/MoviesAPK").then(()=>{
    console.log("Connection OK")
}).catch((err)=>console.log(err))

const app = express()
app.use(express.json())
app.use(cors())
app.use("/",manual_route)

app.listen(port)