import { useState,useEffect } from "react"
import Message from "./Message"
import './Chat.css'

export default function Chat({socket,username,room,setRoom,setUsername}){

    const [recievedMessage,setRecievedMessage] = useState([])


    useEffect(()=>{
        socket.on("receive_message",function(data){
            console.log("Client side Recieve message")
            console.log(data);
            console.log(socket)
            const {username,room,createdTime,message} = data;
    
            setRecievedMessage((state)=>[...state,{
                message : message,
                username : username,
                room : room,
                createdTime : createdTime
            }])
    
        })
    },[socket])
    



    return (
        <div className="chatWindow">
            <div className="chatUpperPane">
            {   
                recievedMessage.map((msg,index)=>{
                    return (
                        <div className="messageBlock">
                            <span>{msg.message}</span>
                            <div className="msgDetails">
                                <span>{msg.username}</span>
                                <span>{msg.createdDate}</span>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <Message socket={socket} username={username} room={room} setRoom={setRoom} setUsername={setUsername}></Message>
        </div>
    )
}

