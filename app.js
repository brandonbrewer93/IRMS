const express = require("express"),
      app     = express(),
      mongoose = require("mongoose"),
      bodyParser = require("body-parser"),
      User     = require("./models/user");

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://ds139970.mlab.com:39970/irms', {
    user: "**********",
    pass: "**********"
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