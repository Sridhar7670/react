require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { route } = require('./routes/routes');

const app = express();
const uri = process.env.MONGO_URL;

mongoose.connect(uri)
  .then(() => console.log("Connection with DB established"))
  .catch((err) => console.log("DB connection error:", err.message));

app.use(express.json());
app.use("/", route);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at ${port}`));
 