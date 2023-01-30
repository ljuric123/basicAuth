
const mongoose = require("mongoose");

var model = require("./userSchema");

var schema = mongoose.Schema;
var userSchema = new schema(model, {timestamps: true});

module.exports = mongoose.model("users", userSchema);

export {};