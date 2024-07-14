const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*"
    },
    path: "/socket.io" // Specify the path at silenttalbeshow.com/socket.io since we already have the Flask app at silenttableshow.com
});

io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("sendMessage", (message) => {
        console.log("Message received: ", message);
        const newMessage = {
            char: message,
            user: socket.id
        };

        // Send message to Unity
        io.emit("messages", newMessage);


    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

httpServer.listen(8081, () => {
    console.log("Server is running on port 8081");
});
