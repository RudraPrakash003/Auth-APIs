const mongoose = require("mongoose");
const connectDB = (url) => {
  return mongoose.connect("mongodb://localhost:27017/");
};
module.exports = connectDB;