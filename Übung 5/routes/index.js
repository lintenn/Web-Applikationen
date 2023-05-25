var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Luis Site', name: 'Luis Miguel Garcia Marin' });
});

/* GET another page. */
router.get('/another', function(req, res, next) {
  res.render('another', { title: 'Another Luis Site', name: 'Luis Miguel Garcia Marin' });
});

router.get('/person', function(req, res, next) {
  res.render('person');
});

module.exports = router;
