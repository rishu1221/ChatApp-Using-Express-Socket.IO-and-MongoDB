import styles from '../Chat/styles.module.css';
import Message from '../Chat/Message';
import SendMessage from '../Chat/SendMessage'

export default function Chat({username,socket,room}){
    return (
        <div className={styles.chatContainer}>
            <div>
            <Message socket={socket}></Message>
            <SendMessage socket={socket} username={username} room = {room}></SendMessage>
            </div>
            
        </div>
    )
}