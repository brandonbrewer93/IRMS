const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  type: String,
  address: String,
  description: String,
  organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization"
    },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    name: String
  }
})

module.exports = mongoose.model("Report", reportSchema);