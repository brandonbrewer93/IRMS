const express  = require("express"),
      router   = express.Router(),
      passport = require("passport"),
      User     = require("../models/user");

router.get("/", function(req, res){
    User.find({}, function(err, allUsers){
        if(err){
            console.log(err)
        } else {
            res.render("../views/users/index", {users: allUsers});
        }
    });
});

router.get("/new", function(req, res){
  res.render("../views/users/new");
});

router.post("/", function(req, res){
  let firstName    = req.body.firstName,
      lastName     = req.body.lastName,
      organization = req.body.organization,
      username     = req.body.username;

  const newUser = {
      firstName: firstName,
      lastName: lastName,
      organization: organization,
      username: username
    };

  User.register(newUser, req.body.password, function(err, user){
      if(err){
          console.log(err)
      } else {
          passport.authenticate("local")(req, res, function(){
              res.redirect("/");
          })
      }
  })
});

// show login form
router.get("/login", function(req, res){
    res.render("../views/users/login");
});

router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/",
        failureRedirect: "../users/login"
    }), function(req, res){
});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
 });

module.exports = router;