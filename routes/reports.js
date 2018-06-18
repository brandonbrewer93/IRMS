const express = require("express"),
      router  = express.Router(),
      Report  = require("../models/report");


router.get("/", function(req, res){
  Report.find({}, function(err, allReports){
    if(err){
      console.log(err);
    } else {
      res.render("../views/reports/index", {reports: allReports});
    }
  });
});

router.get("/new", function(req, res){
  res.render("../views/reports/new");
});

router.post("/", function(req, res){
  let description = req.body.description,
      address = req.body.address,
      type    = req.body.type;

  const newReport = {
    description: description,
    address : address,
    type : type,
    author: {
      id: req.user._id,
      name: req.user.firstName + " " + req.user.lastName
    }
  };

  Report.create(newReport, function(err, createdReport){
    if(err){
      console.log("ERROR");
    } else {
      console.log("Successfully created new report..");
      res.redirect("/reports/" + createdReport._id);
    }
  })
});

router.get("/:id", function(req, res){
  Report.findById(req.params.id).exec(function(err, foundReport){
    if(err){
      console.log("err");
    } else {
      res.render("reports/show", {report: foundReport});
    }
  });
});

module.exports = router;