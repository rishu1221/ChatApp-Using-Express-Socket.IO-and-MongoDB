import { useState,useEffect } from "react"
import Message from "./Message"
import './Chat.css'

export default function Chat({socket,username,room,setRoom,setUsername}){

    const [recievedMessage,setRecievedMessage] = useState([])

    const convertEpochTime = (epochTime)=>{
            // If the epoch time is in seconds, convert it to milliseconds
        if (epochTime < 10000000000) {
            epochTime *= 1000;
          }
        
          const date = new Date(epochTime);
          
          // Format the date and time as a human-readable string
          const year = date.getFullYear();
          const month = ('0' + (date.getMonth() + 1)).slice(-2);
          const day = ('0' + date.getDate()).slice(-2);
          const hours = ('0' + date.getHours()).slice(-2);
          const minutes = ('0' + date.getMinutes()).slice(-2);
          const seconds = ('0' + date.getSeconds()).slice(-2);
        
          return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }


    useEffect(()=>{
        socket.on("receive_message",function(data){
            console.log("Client side Recieve message")
            console.log(data);
            const {username,room,createdTime,message} = data;
    
            data.map((arr,index)=>{
                setRecievedMessage((state)=>[...state,arr])
            })

    
        })
    },[socket])
    



    return (
        <div className="chatWindow">
            <div className="chatUpperPane">
            {   
                recievedMessage.map((msg,index)=>{
                    return (
                        <div className="messageBlock">
                            <span className="msgContent">{msg.message}</span>
                            <div className="msgDetails">
                                <span className="p-10">{msg.username}</span>
                                <span>{convertEpochTime(parseInt(msg.createdTime))}</span>
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

