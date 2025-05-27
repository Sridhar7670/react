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

const login = async (req, res) => {
  try {
     const obj = await user_model.findOne({ _id: req.body._id });
    if (obj) {
      const f =await  bcrypt.compare(req.body.password, obj.password);
      if (f) {
        res.json({
          token: jwt.sign({ "_id": obj._id }, "abcd"),
          name: obj.name,
          msg: "Login successful"
        });
      } else {
        res.json({ msg: "Please check the password" });
      }
    } else {
      res.json({ msg: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};



const getFavourites = async (req, res) => {
  try {
    const userId = req.user._id; // from JWT token
    const user = await user_model.findById(userId);
    res.json({ favourites: user.favourites || [] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch favourites' });
  }
};

const addFavourite = async (req, res) => {
  try {
    const userId = req.user._id;
    const movieData = req.body;
    
    await user_model.findByIdAndUpdate(userId, {
      $push: { favourites: movieData }
    });
    
    res.json({ message: 'Added to favourites' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add to favourites' });
  }
};


const removeFavourite = async (req, res) => {
  try {
    const userId = req.user._id;
    const movieName = req.params.movieName;
    
    await user_model.findByIdAndUpdate(userId, {
      $pull: { favourites: { movieName: movieName } }
    });
    
    res.json({ message: 'Removed from favourites' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove from favourites' });
  }
};
// 
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, "abcd", (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user; // This gives you req.user._id in your routes
    next();
  });
};

  
module.exports = { searchmovie, getall ,login ,register,getFavourites,addFavourite,removeFavourite,authenticateToken};
