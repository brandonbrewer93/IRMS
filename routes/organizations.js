const express       = require("express"),
      router        = express.Router(),
      Organization  = require("../models/organization");

router.get("/", function(req, res){
  res.render("../views/organizations/index.ejs")
});

module.exports = router;