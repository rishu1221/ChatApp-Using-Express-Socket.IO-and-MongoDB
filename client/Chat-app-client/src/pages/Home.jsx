import styles from '../pages/styles.module.css';
import { useNavigate } from 'react-router-dom';

export default function Home({username,room,setUserName,setRoom,socket}){
    const navigate = useNavigate();
    const joinRoom = ()=>{
        if(room !=='' && username !==''){
            console.log(username,room)
            socket.emit('join_room',{username,room});
            //Redirec to chat page
            navigate('/chat',{replace:true});
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>Welcome to Developer Rooms</h1>
                <input type="text" className={styles.input} placeholder="Enter Username" onChange={(e)=>setUserName(e.target.value)} />

                <select className={styles.input} onChange={(e)=>{setRoom(e.target.value)}}>
                    <option value="">Select Room</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Node">NodeJS</option>
                    <option value="Express">ExpressJS</option>
                    <option value="React">ReactJS</option>
                </select>

                <button className='btn btn-secondary' onClick={joinRoom}>Join Room</button>
            </div>
            </div>
    )  
};
