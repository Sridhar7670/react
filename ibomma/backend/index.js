const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const manual_route = require("./routes/routes")
mongoose.connect("mongodb+srv://sridharnani090:N3yJWx5DuiPsiL3u@cluster0.mrqdfcl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connection OK")
}).catch((err)=>console.log(err))

const app = express()
app.use(express.json())
app.use(cors({
  origin: "https://react-li9a.vercel.app/",
  credentials: true
}))
app.use("/",manual_route)

// app.listen(5000)  vercel doesn't listen 
module.exports = app;
