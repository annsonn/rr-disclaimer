'use strict';

var _ = require('lodash');
var MediaRelease = require('./mediaRelease.model');

// Get list of mediaReleases
exports.index = function(req, res) {
  MediaRelease.find(function (err, mediaReleases) {
    if(err) { return handleError(res, err); }
    return res.json(200, mediaReleases);
  });
};

// Get a single mediaRelease
exports.show = function(req, res) {
  MediaRelease.findById(req.params.id, function (err, mediaRelease) {
    if(err) { return handleError(res, err); }
    if(!mediaRelease) { return res.send(404); }
    return res.json(mediaRelease);
  });
};

// Creates a new mediaRelease in the DB.
exports.create = function(req, res) {
  MediaRelease.create(req.body, function(err, mediaRelease) {
    if(err) { return handleError(res, err); }
    return res.json(201, mediaRelease);
  });
};

// Updates an existing mediaRelease in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  MediaRelease.findById(req.params.id, function (err, mediaRelease) {
    if (err) { return handleError(res, err); }
    if(!mediaRelease) { return res.send(404); }
    var updated = _.merge(mediaRelease, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, mediaRelease);
    });
  });
};

// Deletes a mediaRelease from the DB.
exports.destroy = function(req, res) {
  MediaRelease.findById(req.params.id, function (err, mediaRelease) {
    if(err) { return handleError(res, err); }
    if(!mediaRelease) { return res.send(404); }
    mediaRelease.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}