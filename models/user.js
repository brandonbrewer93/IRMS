const mongoose              = require("mongoose"),
      passportLocalMongoose = require("passport-local-mongoose"),
      Organization = require("../models/organization");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    organization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization"
    },
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);