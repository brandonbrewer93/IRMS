const express = require("express"),
      router  = express.Router();

router.get("/", function(req, res){
  res.render("index");
});

router.post("/", function(req, res){
  var name = req.body.name;

  var newUser = {name: name};

  User.create(newUser, function(err){
      if(err){
          console.log(err)
      } else {
          console.log("Successfully created new User");
          res.redirect("/");
      }
  });
})

module.exports = router;