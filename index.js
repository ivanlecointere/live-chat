var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();

var server = app.listen(1515, function() {
  console.log('listening to requests in port 1515');
});

//Using static files
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', function(socket){
  console.log('made socket connection', socket.id);
});
