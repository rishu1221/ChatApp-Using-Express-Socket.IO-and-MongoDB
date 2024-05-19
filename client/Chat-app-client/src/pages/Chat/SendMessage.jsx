import {useState} from 'react'
import styles from "./styles.module.css"

export default function SendMessage({username,room,socket}){

    const [message,setMessage] = useState("");

    //Send Message Function
    const sendMessage = ()=>{
        if(message!==''){
            const createdTime = Date.now();
            socket.emit('send_message',{username,room,message,createdTime});
            setMessage('');
        }
    }



    return (
        <div className={styles.sendMessageContainer}>
            <input type="text" placeholder='Enter Message here' onChange={(e)=>{setMessage(e.target.value)}} value={message} />
            <button className="btn btn-primary" onClick={sendMessage}>Send</button>
        </div>
    )
}