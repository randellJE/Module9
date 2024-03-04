const express = require('express');
const router = express.Router();
const Controllers = require("../controllers");

// Get all games by platform
// http://localhost:8080/api/game?platform=${platform}
router.get('/', (req, res) => {
    console.log("Accessing game platforms route");
    Controllers.gameController.getByPlatform(req, res);
});

// Get all games by category
// http://localhost:8080/api/game?category=${category}
router.get('/', (req, res) => {
    console.log("Accessing game categories route");
    Controllers.gameController.getByCategory(req, res);
});

module.exports = router;