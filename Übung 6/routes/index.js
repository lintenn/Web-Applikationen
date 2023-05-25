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

router.get('/newPerson', function(req, res, next) {
  
  res.send("Daten per GET erhalten! Name: " + req.query.name);
  console.log(req.query.name);
});

router.post('/newPerson', function(req, res, next) {
  console.log(req.body.name);
  res.send("Daten per POST erhalten!");
});

module.exports = router;
