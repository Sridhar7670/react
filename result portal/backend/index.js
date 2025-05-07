const mongoose = require('mongoose');
const express = require('express');
const { admin_route } = require('./routes/admin_route');
const { route } = require('./routes/student_route');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb://127.0.0.1:27017/result_portal")
  .then(() => {
    console.log(`MongoDB connection established`);
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err.message);
  });

app.use(express.json());

app.use('/', route)
app.use("/",admin_route)

app.listen(PORT, () => {
  console.log(`Application started at http://localhost:${PORT}`);
});
