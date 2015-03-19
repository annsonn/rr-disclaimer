'use strict';

var express = require('express');
var controller = require('./waiver.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);
router.post('/:id', auth.hasRole('admin'), controller.update);
router.put('/:id', auth.hasRole('admin'), controller.update);

module.exports = router;
