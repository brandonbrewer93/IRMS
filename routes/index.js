const express = require("express"),
      app     = express();

app.get("/", function(req, res){
  res.render("../views/index.ejs")
})

module.exports = app;