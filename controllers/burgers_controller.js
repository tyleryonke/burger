var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// router
router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  burger.getAll(function(data) {
    res.render("index", {burgers: data})
  });
});

router.post("/burgers/create", function (req, res) {
  burger.createNew(req.body.newBurger, req.body.devoured, function() {
    res.redirect("/burgers");
  });
});

router.put("/burgers/update/devour/:id", function (req, res) {
  burger.devourOne(req.params.id, function() {
    res. redirect("/burgers");
  });
});


module.exports = router;
