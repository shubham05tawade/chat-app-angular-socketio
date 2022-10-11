const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const moment = require('moment');

const {Server} = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket)=>{
    console.log('user connected');
    socket.on('message',(data)=>{
        response = {
          time: moment().format('MMMM Do YYYY, h:mm:ss a'),
          message: data?.message,
		      user: data?.user
        }
        io.emit('message', response);
    })
    
    socket.on('disconnect',()=>{
    console.log('user disconnected')
    })
    
})

server.listen(3000, () => {
  console.log('listening on  port3000');
});