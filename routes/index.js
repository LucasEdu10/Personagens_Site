var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Personagem page. */
router.get('/perso', function(req, res, next) {
  res.render('modelo', { title: 'Personagem' });
});


module.exports = router;
