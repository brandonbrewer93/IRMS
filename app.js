const express        = require("express"),
      app            = express(),
      mongoose       = require("mongoose"),
      bodyParser     = require("body-parser"),
      config         = require("./config"),
      methodOverride = require("method-override"),
      seedDb         = require("./seedDB");

// Passport 
const passport      = require("passport"),
      LocalStrategy = require("passport-local");

// Models
const User         = require("./models/user"),
      Report       = require("./models/report"),
      Organization = require("./models/organization");

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
app.use(methodOverride("_method"));

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Secret password",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())

app.use(function(req, res, next){
      res.locals.currentUser = req.user;
      next();
});

app.use("/", index);
app.use("/users", userRoutes);
app.use("/reports", reportRoutes);
app.use("/organizations", organizationRoutes);

// seedDb();

app.listen(3000, function(){
    console.log("IRMS server running on port 3000...")
});