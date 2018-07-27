// Require express and report model
const express = require("express"),
      router  = express.Router(),
      Report  = require("../models/report");

//Get all reports for current users organization
router.get("/", function(req, res){
  let orgId = req.user.organization._id;
  Report.find({ "organization" : orgId }, function(err, allReports){
    if(err){
      console.log(err);
    } else {
      res.render("../views/reports/index", {reports: allReports});
    }
  });
});

// Show the new report page
router.get("/new", function(req, res){
  res.render("../views/reports/new");
});

// Add new report to database, redirect to the report show page.
router.post("/", function(req, res){
  let description = req.body.description,
      address = req.body.address,
      type    = req.body.type;

  const newReport = {
    description: description,
    address: address,
    type: type,
    organization: req.user.organization,
    author: {
      id: req.user._id,
      name: req.user.firstName + " " + req.user.lastName
    }
  };

  Report.create(newReport, function(err, createdReport){
    if(err){
      console.log(err);
    } else {
      res.redirect("/reports/" + createdReport._id);
    }
  })
});

// Show specific report
router.get("/:id", function(req, res){
  Report.findById(req.params.id).exec(function(err, foundReport){
    if(err){
      console.log("err");
    } else {
      res.render("reports/show", {report: foundReport});
    }
  });
});

// Edit report
router.get("/:id/edit", function(req, res){
  Report.findById(req.params.id, function(err, foundReport){
    res.render("reports/edit", {report: foundReport});
  });
});

// Save edits
router.put("/:id", function(req, res){
  Report.findByIdAndUpdate(req.params.id, req.body, function(err, updatedReport){
      if (!err) {
          console.log(req.body);
          res.redirect("/reports/" + req.params.id);
      } else {
          console.log(err);
      }
  });
});

// Delete report
router.delete("/:id", function(req, res){
    Report.findByIdAndRemove(req.params.id, function(err){
        if (!err) {
            res.redirect("/reports");
        } else {
            console.log(err);
        }
    });
});

module.exports = router;