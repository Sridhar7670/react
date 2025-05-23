const express = require("express")
const { getall, searchmovie, register, login } = require("../controller/controller")

const manual_route = express.Router()
manual_route.get("/", (req, res) => {
  res.send("Backend is live!");
});

manual_route.get("/search/:movieName",searchmovie)
manual_route.get("/all",getall)
manual_route.post("/register",register);
manual_route.post("/login",login)
module.exports = manual_route