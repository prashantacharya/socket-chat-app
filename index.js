const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000, () => {
  console.log('Server running');
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connect', (socket) => {
  socket.on('incoming message', (data) => {
    io.emit('message', data);
  });
});
