var express = require('express');
var router = express.Router();
var async = require('async');

router.get('/', function(req, res, next) {
  res.render('coinbase');
});

router.get('/about', function(req, res, next) {
  res.render('index');
});


module.exports = router;
