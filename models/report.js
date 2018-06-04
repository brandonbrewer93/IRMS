const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  type: String,
  address: String,
  description: String
})

module.exports = mongoose.model("Report", reportSchema);