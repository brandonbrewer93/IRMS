const express = require("express"),
      app     = express(),
      mongoose = require("mongoose"),
      bodyParser = require("body-parser"),
      User     = require("./models/user"),
      config   = require("./config");

mongoose.Promise = global.Promise;

mongoose.connect(config.connectionString, {
    user: config.username,
    pass: config.password
})

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.post("/", function(req, res){
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

app.listen(3000, function(){
    console.log("IRMS server running on port 3000...")
})