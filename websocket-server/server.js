const Websocket = require("ws");

const WebsocketServer = new Websocket.Server({
    port: 3000,
})

WebsocketServer.on("connection", (socket) => {
    socket.on("message", (msg) => {
        console.log("Received", msg);
        if (msg === "Hello") socket.send("World");
    })
});