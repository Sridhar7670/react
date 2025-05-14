const express = require("express")
const { getall, searchmovie } = require("../controller/controller")

const manual_route = express.Router()

manual_route.get("/search/:name",searchmovie)
manual_route.get("/all",getall)

module.exports = manual_route