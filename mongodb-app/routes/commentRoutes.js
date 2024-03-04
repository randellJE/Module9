let express = require("express");
let router = express.Router();
let Controllers = require("../controllers/index"); // index.js

// http://localhost:8080/api/comments Adds a GET route to return all comments
router.get('/', (req, res) => {
    Controllers.commentController.getComments(res)
})

// http://localhost:8080/api/comments/create Adds a POST route to create a new comment
router.post('/create', (req, res) => {
    Controllers.commentController.createComment(req.body, res);
})

// http://localhost:8080/api/comments/<id> Adds a PUT route to update a comment
router.put('/:id', (req, res) => {
    Controllers.commentController.updateComment(req, res);
})

// http://localhost:8080/api/comments/<id> Adds a DELETE route to delete a comment
router.delete('/:id', (req, res) => {
    Controllers.commentController.deleteComment(req, res);
})




module.exports = router;