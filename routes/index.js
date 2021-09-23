var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.get('/info', function(req, res, next) {
  res.render('information', { title: 'info' });
});
module.exports = router;
