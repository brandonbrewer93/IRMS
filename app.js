const express    = require("express"),
      app        = express(),
      mongoose   = require("mongoose"),
      bodyParser = require("body-parser"),
      User       = require("./models/user"),
      Report     = require("./models/report"),
      config     = require("./config");

// Routes
const organizationRoutes = require("./routes/organizations"),
      userRoutes         = require("./routes/users"),
      reportRoutes       = require("./routes/reports"),
      index              = require("./routes/index.js");

mongoose.Promise = global.Promise;

mongoose.connect(config.connectionString, {
    user: config.username,
    pass: config.password
})

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use("/", index);
app.use("/users", userRoutes);
app.use("/reports", reportRoutes);
app.use("/organizations", organizationRoutes);

app.listen(3000, function(){
    console.log("IRMS server running on port 3000...")
});