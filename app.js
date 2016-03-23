var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'jade');

app.get('/:name(\\w+)', routes.index);
app.get('*', routes.err404);

var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
});