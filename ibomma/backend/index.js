
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const manual_route = require("./routes/routes");

const app = express();


app.use(cors({
  origin: ["https://react-li9a.vercel.app", "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));




app.use(express.json());
app.use("/", manual_route);

// --- MongoDB connection ---
mongoose.connect("mongodb+srv://sridharnani090:ZjCHx8lLESXbqbSq@moviesapk.x9vm7y7.mongodb.net/Ibomma")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// --- Export app for Vercel ---
module.exports = app;
 