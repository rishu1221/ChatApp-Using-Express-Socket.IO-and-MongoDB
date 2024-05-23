require("dotenv").config()
const express = require('express')
const http = require("http")
const cors = require("cors")
const Server = require("socket.io").Server

//DB imports
const {user,message} = require("./db/connect")
const { create } = require("domain")

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
    console.log(process.env.PORT)
    //Write further emit or on events inside this
    socket.on("join_room",async function(data){
        const {username,room} = data
        //This joins the room and that room will have this socket id mapped to it.
        socket.join(room);

        await user.create({
            "username" : username,
            "room": room,
            "socket_id" : socket.id, 
        })

        
        //Now create a event to send message
        socket.broadcast.to(room).emit("receive_message",{
            "message": `${username} has joined the ${room} room`,
            "username" : "ChatBot",
            "room" : room 
        });

        socket.emit("receive_message",{
            "message": `Welcome ${username}, please follow the community Guidelines for this room`,
            "username" : "ChatBot",
            "room" : room 
        });
    })

    socket.on("send_message",async function(data){
        if(data.room){
            const createdTime = Date.now();
            //Create an entry in your message DB
            await message.create({
                "message": data.message,
                "username" : data.username,
                "createdTime" : createdTime,
                "room" : data.room 
            })

            //Sending to all the room members except yourself
            io.to(data.room).emit("receive_message",data);
            //Sending to the same user
            
        }else{
            console.log(data);
        }
        
    })

})

server.listen(3000);