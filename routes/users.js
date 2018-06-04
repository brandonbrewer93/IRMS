const express = require("express"),
      router  = express.Router(),
      User    = require("../models/user");

router.get("/", function(req, res){
    User.find({}, function(err, allUsers){
        if(err){
            console.log(err)
        } else {
            res.render("../views/users/index", {users: allUsers});
        }
    })
});

router.get("/new", function(req, res){
  res.render("../views/users/new.ejs");
});

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
});

router.get("/edit", function(req, res){
    res.render("../views/users/edit.ejs")
})

module.exports = router;