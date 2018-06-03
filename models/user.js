const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    organization: String,
});

module.exports = mongoose.model("User", userSchema);