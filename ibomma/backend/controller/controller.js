const movieModel = require("../model/model");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { user_model } = require("../model/usermodel");

let searchmovie = async (req, res) => {
    try {
      let data = await movieModel.find({movieName: { $regex: '^' + req.params.movieName, $options: 'i' }})
      res.json(data)
    } catch (err) {
      console.log(err.message)
    }
};

let getall = async (req, res) => {
    try {
    let data=await movieModel.find()
    res.json(data)
    } catch (err) {
      console.log(err.message)
    }
};

const register = async (req, res) => {
  try {
    const hashed_password = await bcrypt.hash(req.body.password, 10);
    const data = new user_model({ ...req.body, password: hashed_password });
    await data.save();
    res.json({ msg: "Registration successful" });
  } catch (err) {
    console.log(err.message);
    if (err.code === 11000) {
      res.status(400).json({ msg: "User already registered" }); // Duplicate ID
    } else {
      res.status(500).json({ msg: "Server error" });
    }
  }
};


module.exports = { searchmovie, getall ,login ,register};
