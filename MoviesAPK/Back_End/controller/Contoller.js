const movieModel = require("../model/model");


let searchmovie = async (req, res) => {
    try {
      // let data=await movieModel.find({"movieName":req.params.name})
      let data = await movieModel.find({movieName: { $regex: '^' + req.params.name, $options: 'i' }})
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

module.exports = { searchmovie, getall };
