var express = require('express');

//App setup
var app = express();

var server = app.listen(1515, function() {
  console.log('listening to requests in port 1515');
});

app.use(express.static('public'));
