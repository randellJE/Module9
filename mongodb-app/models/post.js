const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  title: { type: String, required: true },
  description: { type: String, required: true, maxLength: 255 },
  imageURL: { type: String },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("post", postSchema);
