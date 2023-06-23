const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });
const client = new WebSocket('wss://socket.pasino.io/dice/');
server.on('connection', (socket) => {
  socket.on('message', (message) => {
    client.send(message);
  });
  client.on('message', (message) => {
    socket.send(message);
  });
});
