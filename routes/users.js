const express  = require("express"),
      router   = express.Router(),
      passport = require("passport"),
      User     = require("../models/user"),
      Organization = require("../models/organization");

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
    Organization.find({}, function(err, foundOrgs){
      if(err){
          console.log(err);
      } else {
          res.render("../views/users/new", { organizations: foundOrgs });
      }
    });
});

router.post("/", function(req, res){
  let firstName    = req.body.firstName,
      lastName     = req.body.lastName,
      username     = req.body.username;

  let organization;

  Organization.findOne({name : req.body.organization}, function(err, foundOrg){
      if(err){
          console.log(err)
      } else {
          organization = foundOrg;
      }
  }).then(function(){
      const newUser = {
          firstName: firstName,
          lastName: lastName,
          organization: organization._id,
          username: username
      };

      User.register(new User(newUser), req.body.password, function(err, user){
          if(err){
              console.log(err);
              res.redirect("/users/new");
          } else {
              passport.authenticate("local")(req, res, function(){
                  res.redirect("/");
              })
          }
      })
  });
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