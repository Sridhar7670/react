
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const manual_route = require("./routes/routes");

const app = express();


// Configure CORS options
const corsOptions = {
  origin: ["https://moviesbackend-phi.vercel.app/", "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Add OPTIONS
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));

// Handle preflight requests
// app.options('*', cors(corsOptions)); // Enable preflight for all routes


app.use(express.json());
app.use("/", manual_route);

// --- MongoDB connection ---
mongoose.connect("mongodb+srv://sridharnani090:ZjCHx8lLESXbqbSq@moviesapk.x9vm7y7.mongodb.net/Ibomma")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// --- Export app for Vercel ---
module.exports = app;
