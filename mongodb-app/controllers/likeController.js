"use strict";
let Models = require("../models/index");

const getLikes = (res) => {
  // find all likes
  Models.Like.find({})
    .populate("userID")
    .populate("postID")
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createLike = (data, res) => {
  // create new like
  new Models.Like(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteLike = (req, res) => {
  // delete like
  Models.Like.findOneAndDelete({
    post: req.params.postId,
    user: req.params.userId,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getLikes,
  createLike,
  deleteLike,
};
