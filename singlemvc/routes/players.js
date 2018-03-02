var express = require('express');
var router = express.Router();
var Player = require("../controllers/PlayerController.js");

// Get all Players
router.get('/', function(req, res) {
  Player.list(req, res);
});

// Get single Player by id
router.get('/show/:id', function(req, res) {
  Player.show(req, res);
});

// Create Player
router.get('/create', function(req, res) {
  Player.create(req, res);
});

// Save Player
router.post('/save', function(req, res) {
  Player.save(req, res);
});

// Edit Player
router.get('/edit/:id', function(req, res) {
  Player.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  Player.update(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
  Player.delete(req, res);
});

module.exports = router;
