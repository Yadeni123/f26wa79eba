var express = require('express');
var router = express.Router();

// Initialize vOne and vTwo
let vOne = 123;
let vTwo = 60;

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (vOne > vTwo) {
    vOne = vOne - vTwo;
  } else {
    vTwo = vTwo - vOne;
  }
  res.send(`Values are: ${vOne} and ${vTwo}`);
});

module.exports = router;
