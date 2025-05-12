const mongoose=require("mongoose")
const movieSchmea=new mongoose.Schema({
    "_id": Number,
    "movieName": String,
    "director": String,
    "cast": [],
    "description": String,
    "ratingIMDB": String,
    "img": String,
    "genre": String,
    "releaseYear": Number,
    "language": String
})

let movieModel = mongoose.model("Movies",movieSchmea)

module.exports = movieModel