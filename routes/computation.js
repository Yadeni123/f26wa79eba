var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let x;

  if (req.query.x !== undefined) {
    x = Number(req.query.x);
  } else {
    x = Math.random() * 10;
  }

  let y = Math.sqrt(x); 

  res.send(`Math.sqrt() applied to ${x} is ${y}`);
});

module.exports = router;