let express = require("express");
let router = express.Router();
let Controllers = require("../controllers/index"); // index.js

// http://localhost:8080/api/posts Adds a GET route to return all posts
router.get('/', (req, res) => {
    Controllers.postController.getPosts(res)
})

// http://localhost:8080/api/posts/create Adds a POST route to create a new post
router.post('/create', (req, res) => {
    Controllers.postController.createPost(req.body, res);
})

// http://localhost:8080/api/posts/<id> Adds a PUT route to update a post
router.put('/:id', (req, res) => {
    Controllers.postController.updatePost(req, res);
})

// http://localhost:8080/api/posts/<id> Adds a DELETE route to delete a post
router.delete('/:id', (req, res) => {
    Controllers.postController.deletePost(req, res);
})




module.exports = router;