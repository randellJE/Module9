const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  postID: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  text: { type: String, required: true, maxLength: 255 },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comment", commentSchema);
