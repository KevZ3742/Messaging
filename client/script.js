import { io } from 'socket.io-client';

const form = document.getElementById('message-form');

const socket = io('http://localhost:3000');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message === "") return;
    displayMessage(message);

    messageInput.value = '';
});

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    document.getElementById('chat-container').appendChild(messageElement);
}
