const express = require('express');
const auth = require('../middleware/middleware');
const {getallBooks , getBookById,getBook,addReview,updateReview,deleteReview} = require("../controller/bookController");
const { login, register } = require('../controller/controller');
const route = express.Router();

//login , register routes 
route.post("/register", register);
route.post("/login", login);

//other routes of books, reviews

route.get('/books', getallBooks);
route.get('/books/:id', getBookById);
route.post('/books/:id/reviews', auth, addReview);
route.post('/reviews/:id', auth, updateReview);
route.delete('/reviews/:id', auth, deleteReview);
route.get('/search', auth, getBook);
module.exports = { route };
