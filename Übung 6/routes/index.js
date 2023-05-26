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
  console.log("Last name: " + req.query.lastName);
  console.log("E-Mail: " + req.query.email);
  console.log("Birthday: " + req.query.birthday);


  let now = new Date(Date.now()).getTime();
  let bday = new Date(req.query.birthday).getTime();
  console.log(now);
  console.log(bday);
  let difference = now - bday;
  console.log(difference);
  difference = difference / (1000 * 60 * 60 * 24);
  difference = Math.floor(difference);

  console.log("Days alive: " + difference);

  res.send("Daten per GET erhalten! Name: " + req.query.lastName);
  
});

router.post('/newPerson', function(req, res, next) {
  console.log(req.query.lastName);
  res.send("Daten per POST erhalten! Name: " + req.query.lastName);
});

module.exports = router;
