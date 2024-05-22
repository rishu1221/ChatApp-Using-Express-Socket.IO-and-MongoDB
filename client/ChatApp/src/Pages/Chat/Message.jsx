import { useState } from "react"
import "./Message.css"

export default function Message({socket,username,room,setRoom,setUsername}){

    const [typedMessage,setTypedMessage] = useState("")

    const sendMessage = ()=>{
        console.log("Sendingmessage")
        if(typedMessage!==''){
            socket.emit("send_message",{
                "message": typedMessage,
                "username" : username,
                "room" : room,
                "createdTime" : Date.now()
            })
            setTypedMessage("")
        }
    }

    


    return (
        <div className="InputMessageDiv">
            <input type="text" placeholder="Enter your message" className="input_message" onChange={(e)=>{setTypedMessage(e.target.value)}}/>
            <button onClick={sendMessage} className="btn-send">Send</button>
        </div>
    )
}