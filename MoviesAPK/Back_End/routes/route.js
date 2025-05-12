const express = require("express")
const { searchmovie, getall } = require("../controller/Contoller")

const manual_route = express.Router()

manual_route.get("/search/:name",searchmovie)
manual_route.get("/all",getall)

module.exports = manual_route