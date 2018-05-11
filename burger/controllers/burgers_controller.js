var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
  burger.show(function(data){
    res.render("index", { burger: data });
  })
});

router.post("/", function(req, res) {
    burger.add(req.body.burger_name, function(){
      return res.redirect("/");
    })
});

router.put("/", function(req, res) {
  burger.update(req.body.id, function(){
    return res.redirect("/");
  })
});

module.exports = router;