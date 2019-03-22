//Making connection

var socket = io.connect('http://localhost:1515');

//Query DOM
var message = document.getElementById('message');
var send = document.getElementById('send');
var nickname = document.getElementById('nickname');
var chat = document.getElementById('chat');

//Emit events
send.addEventListener('click', function() {
  if (nickname.value == '') {
    alert('You have to set a nickname in order to send a message.');
  } else if (message.value == '') {
    alert("You're trying to send an empty message.");
  } else {
    socket.emit('chat', {
      message: message.value,
      nickname: nickname.value
    });
    nickname.readOnly = true; 
  }
});

//Listen for events
socket.on('chat', function(data) {
  chat.innerHTML += '<p><strong>'+data.nickname+' says: </strong>'+data.message+'</p>';
  message.value = '';
  chat.scrollTop = chat.scrollHeight;
})
