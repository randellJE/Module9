"use strict";

require('dotenv').config()
const Mongoose = require("mongoose");

// if the connection fails, try 127.0.0.1 instead of localhost below
const uri = process.env.DB_URI;

Mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Error: ", error.message)); // , are better than using +

// Get the default connection
const db = Mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

exports.Mongoose = Mongoose;
