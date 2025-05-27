const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieName: {type: String,required: true},
  director: {type: String,required: true},
  cast: { type: [String], default: [] },
  description: { type: String,required: true},
  ratingIMDB: {type: String,required: true },
  img: {type: String,required: true},
  genere: { type: String,required: true },
  releaseYear: {type: Number,required: true },
  language: {type: String,required: true},
  age: {type: Number,required: false},
  favourites: [{
    movieName: String,
    director: String,
    cast: [String],
    description: String,
    ratingIMDB: String,
    img: String,
    genere: String,
    releaseYear: Number,
    language: String,
    age: Number
  }]
}
);

const movieModel = mongoose.model('Movie', movieSchema);

module.exports = movieModel;
