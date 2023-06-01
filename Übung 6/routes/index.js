var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Jesus Site", name: "Jesus Moreno" });
});

/* GET another page. */
router.get("/another", function (req, res, next) {
  res.render("another", { title: "Another Jesus Site", name: "Jesus Moreno" });
});

router.get("/person", function (req, res, next) {
  res.render("person");
});

router.get("/newPerson", function (req, res, next) {
  // Validate request
  if (!req.query.name || !req.query.birthday) {
    res.status(400).send({
      message: "Name and birthday parameters are required",
    });
    return;
  }

  // Extract name and birthday from request query
  const { name, birthday } = req.query;

  // Convert birthday to seconds since UNIX epoch (1/1/1970)
  const birthdayInSeconds = Math.floor(new Date(birthday).getTime() / 1000);

  // Calculate the number of days the person has been alive
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const secondsAlive = currentTimestamp - birthdayInSeconds;
  const daysAlive = Math.floor(secondsAlive / (24 * 60 * 60));

  res.send(`Data received via GET! Name: ${name}. Days alive: ${daysAlive}`);
  console.log(name, "has been alive for", daysAlive, "days.");
});

router.post("/newPerson", function (req, res, next) {
  console.log(req.body.name);
  res.send("Daten per POST erhalten!");
});

module.exports = router;
