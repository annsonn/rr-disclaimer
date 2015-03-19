'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MediaReleaseSchema = new Schema({
  firstName: String,
  lastName: String,
  date: String,
  signature: String,
  viewed: { type: Boolean, default: false }
});

module.exports = mongoose.model('MediaRelease', MediaReleaseSchema);