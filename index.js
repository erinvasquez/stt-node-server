const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


const { Server } = require("socket.io");

// "Initialize a new instance of socket.io by passing the (HTTP) server object
const io = new Server(server, {
    path: "/socket.io" // specify the custom path
});


// Serve an HTML page to interact with at silenttableshow.com/socket.io
app.get('/socket.io', (req, res) => {
    //res.send('<h1>Hello World</h1>');
    res.sendFile(__dirname + '/index.html');

});

// "Listen on the connection event for incoming sockets"
io.on('connection', (socket) => {
    console.log('User connected');












server.listen(8081, () => {
    console.log('listening on *:8081');
});
