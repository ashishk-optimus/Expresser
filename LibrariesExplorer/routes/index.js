var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/1', function(req, res, next) {
  res.render('index1');
});

/* GET home page. */
router.get('/2', function(req, res, next) {
  res.render('index2');
});

module.exports = router;
