const messages = [];

socket.on('message', (data) => {
  messages.push(data);

  displayChatInterface(messages);
});

function displayChatInterface(messages) {
  let html = '';
  messages.forEach((message) => {
    html += `<div class='mb-1'><span id='sender'>${message.name}:</span> ${message.message}</div>`;
  });

  _('#chat-interface').innerHTML = html;
}

displayChatInterface(messages);
