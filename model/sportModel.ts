
const mongoose = require("mongoose");

var model = require("./sportSchema");

var schema = mongoose.Schema;

var sportSchema = new schema(model, {timestamps: true},  {_id: false});

module.exports = mongoose.model("sports", sportSchema);

export {};