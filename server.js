const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
// Create an HTTP server and pass the Express app to it
const server = http.createServer(app);
// Initialize socket.io by passing the newly created HTTP server
const io = new Server(server);

app.use(express.static('public'));

// Log user connections and disconnections
io.on('connection', (socket) => {
    console.log('a user connected');
    
    // Listen for incomming 'chat message' events from clients
    socket.on('chat message', (msg) => {
        // Broadcast the 'chat message' event to all connected clients with io.emit
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Server running on port 3000 by default
// Temporary host on ngrok for testing
// Use 'ngrok http 3000' in terminal
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
