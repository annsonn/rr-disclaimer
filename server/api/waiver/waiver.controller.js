/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /waiver              ->  index
 * POST    /waiver              ->  create
 * GET     /waiver/:id          ->  show
 * PUT     /waiver/:id          ->  update
 * DELETE  /waiver/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Waiver = require('./waiver.model');

// Get list of waivers
exports.index = function(req, res) {
  Waiver.find(function (err, waivers) {
    if(err) { return handleError(res, err); }
    return res.json(200, waivers);
  });
};

// Get a single waiver
exports.show = function(req, res) {
  Waiver.findById(req.params.id, function (err, waiver) {
    if(err) { return handleError(res, err); }
    if(!waiver) { return res.send(404); }
    return res.json(waiver);
  });
};

// Creates a new waiver in the DB.
exports.create = function(req, res) {
  Waiver.create(req.body, function(err, waiver) {
    if(err) { return handleError(res, err); }
    return res.json(201, waiver);
  });
};

// Updates an existing waiver in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Waiver.findById(req.params.id, function (err, waiver) {
    if (err) { return handleError(res, err); }
    if(!waiver) { return res.send(404); }
    var updated = _.merge(waiver, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, waiver);
    });
  });
};

// Deletes a waiver from the DB.
exports.destroy = function(req, res) {
  Waiver.findById(req.params.id, function (err, waiver) {
    if(err) { return handleError(res, err); }
    if(!waiver) { return res.send(404); }
    waiver.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}