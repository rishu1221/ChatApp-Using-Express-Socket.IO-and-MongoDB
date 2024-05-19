import styles from '../Chat/styles.module.css';
import Message from '../Chat/Message';

export default function Chat({socket}){
    return (
        <div className={styles.chatContainer}>
            <div>
            <Message socket={socket}></Message>
            </div>
        </div>
    )
}