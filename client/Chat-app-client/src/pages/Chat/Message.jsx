import { useState,useEffect } from 'react'
import styles from '../Chat/styles.module.css'

export default function Message({socket}){

    //Maintain a state message that keeps on getting updated from the server
    const [message,setMessage] = useState([]);

    useEffect(()=>{

        socket.on('recieve_message',(data)=>{
            console.log(data);
            console.log("On Recieve Event Triggered")
            setMessage((state)=> [...state,{message : data.message, username : data.username, createdTime : data.createdTime}])
        }
        )

        console.log(message)
        return ()=>socket.off('recieve_message');
    },[socket])

    function formatDateFromTimestamp(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString();
      }


    return (
        <div className={styles.messagesColumn}>
            {
                message.map((msg,index)=>{
                    <div className={styles.message} key={index}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span className={styles.msgMeta}>{msg.username}</span>
                            <span className={styles.msgMeta}>
                            {formatDateFromTimestamp(msg.__createdtime__)}
                            </span>
                        </div>
                        <p className={styles.msgText}>{msg.message}</p>
                        <br />
                    </div>
                })
            }
        </div>
    )
}