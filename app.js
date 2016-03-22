var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('/:name?', function(req, res) {
    var name = req.params.name;
    res.render('index', {
        name: name
    });
});

app.get('*', function(req, res) {
    res.send('<h1>404</h1>');
});

var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
});