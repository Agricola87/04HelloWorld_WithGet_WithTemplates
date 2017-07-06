var express = require('express');
var router = express.Router();

var app = express();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('input', { title: 'Hi', message: 'Want to see personal Greetings?' })
});

router.get('/form_handler', function(req, res, next) {
    
    username = req.query.username;
    console.log(username);
    res.render('output', { title: 'Response', username: username })
});

module.exports = router;
