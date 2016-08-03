var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  var showForm;
  res.render( 'index', { tweets: tweets, showForm: true });

});
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  console.log(list);
  res.render( 'index', { tweets : list } );
});
module.exports = router;