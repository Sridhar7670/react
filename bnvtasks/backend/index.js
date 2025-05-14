const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const manual_route = require("./routes/routes")
mongoose.connect("mongodb://127.0.0.1:27017/IMDB").then(()=>{
    console.log("Connection OK")
}).catch((err)=>console.log(err))

const app = express()
app.use(express.json())
app.use(cors())
app.use("/",manual_route)

app.listen(5000)