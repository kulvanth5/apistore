const mongoose = require("mongoose");
// const Joi = require("joi");

const apiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  endpoint: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const api = mongoose.model("APIs", apiSchema);

module.exports = api;
