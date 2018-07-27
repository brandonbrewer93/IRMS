const express       = require("express"),
      router        = express.Router(),
      Organization  = require("../models/organization");

// Show all Organizations...no actual link to this in the project, you can still navigate here manually.
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