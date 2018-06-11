const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  name: String,
  type: String
});

module.exports = mongoose.model("Organization", organizationSchema);