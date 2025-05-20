const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    _id: { type: String, required: true }, 
    password: { type: String, required: true },
    name: { type: String, required: true }
});

const user_model = mongoose.model('user_page', user_schema);

module.exports = { user_model };
