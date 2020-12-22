const http = require('https');
const express = require('express');
const socketio = require('socket.io')
const cors = require('cors');

const PORT = process.env.PORT || 7000
const router = require("./router")

const app = express()
const server = http.createServer(app)
const io = socketio(server)



io.on("connection", (socket) =>{
    console.log("we have a new connection!!")

    socket.on("disconnect", () =>{
        console.log("User had left");
    })
})

app.use(cors());
app.use(router)

server.listen(PORT, () =>{
    console.log(`server has started at port num ${PORT}`);
})