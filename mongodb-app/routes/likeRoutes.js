let express = require("express");
let router = express.Router();
let Controllers = require("../controllers/index"); // index.js

// http://localhost:8080/api/likes Adds a GET route to return all likes
router.get('/', (req, res) => {
    Controllers.likeController.getLikes(res)
})

// http://localhost:8080/api/likes/create Adds a POST route to create a new like
router.post('/create', (req, res) => {
    Controllers.likeController.createLike(req.body, res);
})

// http://localhost:8080/api/likes/<id> Adds a DELETE route to delete a like
router.delete('/:id', (req, res) => {
    Controllers.likeController.deleteLike(req, res);
})




module.exports = router;