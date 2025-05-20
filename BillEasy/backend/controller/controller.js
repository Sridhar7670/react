const { user_model } = require("../model/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();



const register = async (req, res) => {
    try {
        const { _id, password, name } = req.body;

        const f = await user_model.findById(_id);
        if (f) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const hashed_password = await bcrypt.hash(password, 10);
        const data = new user_model({ _id, name, password: hashed_password });
        await data.save();

        res.status(201).json({ msg: "Registration successful" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};


const login = async (req, res) => {
    try {
        const { _id, password } = req.body;
        const obj = await user_model.findById(_id);

        if (!obj) {
            return res.status(404).json({ msg: "User not found" });
        }

        const isPasswordMatch = await bcrypt.compare(password, obj.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ msg: "Incorrect password" });
        }

        const token = jwt.sign({ _id: obj._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({ token, name: obj.name });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

module.exports = { login, register };
