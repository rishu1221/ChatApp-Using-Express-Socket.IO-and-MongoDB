const express = require('express')
const http = require("http")
const cors = require("cors")
const Server = require("socket.io").Server

const app = express()
const server = http.createServer(app);
const io = new Server(server,{
    cors : {
        origin : "http://localhost:5173",
        methods : ["GET","POST"]
    }
})

io.on("connection",function(socket){
    console.log(socket.id);

    //Write further emit or on events inside this
    socket.on("join_room",function(data){
        const {username,room} = data
        //This joins the room and that room will have this socket id mapped to it.
        socket.join(room);

        //Now create a event to send message
        socket.broadcast.to(room).emit("receive_message",{
            "message": `${username} has joined the ${room} room`,
            "username" : "ChatBot",
            "createdTime" : Date.now(),
            "room" : room 
        });

        socket.emit("receive_message",{
            "message": `Welcome ${username}, please follow the community Guidelines for this room`,
            "username" : "ChatBot",
            "createdTime" : Date.now(),
            "room" : room 
        });
    })

    socket.on("send_message",function(data){
        if(data.room){
            //Sending to all the room members except yourself
            console.log("Inside send message")
            io.to(data.room).emit("receive_message",data);
            //Sending to the same user
            
        }else{
            console.log(data);
        }
        
    })

})

server.listen(3000);