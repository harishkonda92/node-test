const express = require('express');
const router = express.Router();
const { mailer } = require('./sendemails');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendemail', mailer.sendemails);




module.exports = { router };
