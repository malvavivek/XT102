var mongoose = require("mongoose");
var Player = require("../model/Player");

var playerController = {};

// Show list of players
playerController.list = function(req, res) {
  Player.find({}).exec(function (err, players) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/players/index", {players: players});
    }
  });
};

// Show Player by id
playerController.show = function(req, res) {
  Player.findOne({_id: req.params.id})
  .exec(function (err, player) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/players/show", {player: player});
    }
  });
};

// Create new player
playerController.create = function(req, res) {
  res.render("../views/players/create");
};

// Save new Player
playerController.save = function(req, res) {
  var player = new Player(req.body);

  player.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/players/create");
    } else {
      console.log("Successfully created an player.");
      res.redirect("/players/show/"+player._id);
    }
  });
};

// Edit an Player
playerController.edit = function(req, res) {
  Player.findOne({_id: req.params.id})
  .exec(function (err, player) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/players/edit", {player: player});
    }
  });
};

// Update an Player
playerController.update = function(req, res) {
  Player.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, age: req.body.age, playerType: req.body.playerType }}, { new: true }, function (err, player) {
    if (err) {
      console.log(err);
      res.render("../views/players/edit", {player: req.body});
    }
    res.redirect("/players/show/"+player._id);
  });
};

// Delete an Player
playerController.delete = function(req, res) {
  Player.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Player deleted!");
      res.redirect("/players");
    }
  });
};

module.exports = playerController;
