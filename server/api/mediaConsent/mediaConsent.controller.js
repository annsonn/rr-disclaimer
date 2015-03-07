'use strict';

var _ = require('lodash');
var MediaConsent = require('./mediaConsent.model');

// Get list of mediaConsents
exports.index = function(req, res) {
  MediaConsent.find(function (err, mediaConsents) {
    if(err) { return handleError(res, err); }
    return res.json(200, mediaConsents);
  });
};

// Get a single mediaConsent
exports.show = function(req, res) {
  MediaConsent.findById(req.params.id, function (err, mediaConsent) {
    if(err) { return handleError(res, err); }
    if(!mediaConsent) { return res.send(404); }
    return res.json(mediaConsent);
  });
};

// Creates a new mediaConsent in the DB.
exports.create = function(req, res) {
  MediaConsent.create(req.body, function(err, mediaConsent) {
    if(err) { return handleError(res, err); }
    return res.json(201, mediaConsent);
  });
};

// Updates an existing mediaConsent in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  MediaConsent.findById(req.params.id, function (err, mediaConsent) {
    if (err) { return handleError(res, err); }
    if(!mediaConsent) { return res.send(404); }
    var updated = _.merge(mediaConsent, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, mediaConsent);
    });
  });
};

// Deletes a mediaConsent from the DB.
exports.destroy = function(req, res) {
  MediaConsent.findById(req.params.id, function (err, mediaConsent) {
    if(err) { return handleError(res, err); }
    if(!mediaConsent) { return res.send(404); }
    mediaConsent.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}