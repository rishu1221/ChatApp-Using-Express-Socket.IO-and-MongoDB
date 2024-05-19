const dotenv = require('dotenv')
dotenv.config();
const messageTable = require("../server/db/connect")
const express = require('express')
const cors = require('cors')
const {Server} = require('socket.io')
const http = require("http");
const { create } = require('domain');
const app = express();

app.use(cors());

const server = http.createServer(app)

const io = new Server(server,{ 
    cors :{
        origin : "http://localhost:5173",
        methods : ['GET','POST']
    },
    secure : false    
})
server.listen(3000)

app.get("/",async (req,res)=>{
    res.send("Hello");
})

io.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});

let chatRoom = '';
let allUsers = [];

io.on('connection',(socket)=>{
    console.log(`User is connected ${socket.id}`);
    const Chat_bot = 'CHAT BOT'
    //Listen to join_room event emitted on client
    socket.on("join_room",(data)=>{
        const {username,room} = data
        console.log(username,room)
        socket.join(room)

        //Notify others users in this room that a new user has joined
        const createdTime = Date.now();

        socket.to(room).emit('recieve_message',{
            message : `${username} has joined the room`,
            username : Chat_bot,
            createdTime
        })

        socket.emit('recieve_message',{
            message : `Welcome ${username} to the ${room} Chat.Please respect community guidelines`,
            username : Chat_bot,
            createdTime
        })

        //Now we need to store the username and name of the room the user belongs 
        chatRoom = room;
        allUsers.push({id : socket.id,username,room});
        chatRoomUsers = allUsers.filter((user)=>user.room ===room);

        //Create another event chat_room users which shows us how many users are there in that room
        socket.to(room).emit('chat_room_users',chatRoomUsers);
        socket.emit('chat_room_users',chatRoomUsers);

        socket.on("send_message",async (data)=>{
            const {username,room,createdTime,message} = data;
            io.to(room).emit('recieve_message',data);

            //Save this message inside DB
            await messageTable.create(data);
            console.log("Message sent");
        })

    })
})






