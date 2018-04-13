const mongoose = require("mongoose");

let StudentSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  standard: String,
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Student", "StudentSchema");
