// const mongoose = require("mongoose")
// const express = require("express")
// const cors = require("cors")
// const manual_route = require("./routes/routes")
// mongoose.connect("mongodb+srv://sridharnani090:ZjCHx8lLESXbqbSq@moviesapk.x9vm7y7.mongodb.net/Ibomma")
// .then(()=>{
//     console.log("Connection OK")
// }).catch((err)=>console.log(err))

// const app = express()
// app.use(express.json())
// app.use(cors({
//   origin: ["https://react-li9a.vercel.app", "http://localhost:3000"],
//   credentials: true
// }))

// app.use("/",manual_route)

// app.listen(5000)  //vercel doesn't listen 
// module.exports = app;
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const manual_route = require("./routes/routes");

const app = express();

// --- CORS setup ---
const corsOptions = {
  origin: ["https://react-li9a.vercel.app", "http://localhost:3000"],
  credentials: true,
};

app.use(cors(corsOptions));


// --- Other middlewares ---
app.use(express.json());
app.use("/", manual_route);

// --- MongoDB connection ---
mongoose.connect("mongodb+srv://sridharnani090:ZjCHx8lLESXbqbSq@moviesapk.x9vm7y7.mongodb.net/Ibomma")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// --- Export app for Vercel ---
module.exports = app;
 