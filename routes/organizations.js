const express       = require("express"),
      router        = express.Router(),
      Organization  = require("../models/organization");

router.get("/", function(req, res){
  Organization.find({}, function(err, allOrganizations){
    if(err){
      console.log(err);
    } else {
        res.render("../views/organizations/index.ejs", {organizations: allOrganizations});
    }
  })
});

module.exports = router;