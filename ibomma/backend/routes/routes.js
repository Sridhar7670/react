const express = require("express")
const { getall, searchmovie, register, login, getFavourites, 
  addFavourite, removeFavourite, authenticateToken } = require("../controller/controller")

const manual_route = express.Router()
manual_route.get("/", (req, res) => {
  res.send("Backend is live!");
});

manual_route.get("/search/:movieName",searchmovie)
manual_route.get("/all",getall)
manual_route.post("/register",register);
manual_route.post("/login",login)
app.get('/favourites', authenticateToken, getFavourites);
app.post('/favourites', authenticateToken, addFavourite);
app.delete('/favourites/:movieName', authenticateToken, removeFavourite);
module.exports = manual_route