var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express',status:'false' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express',status:'false' });
});

router.get('/loginmode', function(req, res, next) {
  res.render('loginmode');
});

router.get('/loginmobile', function(req, res, next) {
  res.render('loginmobile',{status:"false"});
});

module.exports = router;
