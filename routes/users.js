const express = require("express"),
      router  = express.Router(),
      User    = require("../models/user");

router.get("/new", function(req, res){
  res.render("../views/users/new.ejs");
});

router.get("/edit", function(req, res){
    res.render("../views/users/edit.ejs")
})

router.post("/", function(req, res){
  let firstName    = req.body.firstName,
      lastName     = req.body.lastName,
      organization = req.body.organization;

  const newUser = {
      firstName: firstName,
      lastName: lastName,
      organization: organization
    };

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