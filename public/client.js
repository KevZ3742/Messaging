const socket = io();

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesDiv = document.getElementById('messages');

// Event listener for the send button
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        // Send the message to the server with socket.emit
        // First argument is the event name, second argument is the data
        socket.emit('chat message', message);
        messageInput.value = '';
    }
});

// Listen for incomming 'chat message' events from the server
socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messagesDiv.appendChild(messageElement);
});
