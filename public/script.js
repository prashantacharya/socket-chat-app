/*
 * socket client sedning messages
 */

const socket = io.connect('http://localhost:3000');

const form = _('#chat-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const msgField = _('#message');
  const message = msgField.value;

  socket.emit('incoming message', { name, message });
  msgField.value = '';
});
