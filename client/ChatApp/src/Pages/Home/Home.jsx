import { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home({socket,username,room,setUsername,setRoom}){
    
    

    const navigate = useNavigate();
    
    const joinRoom = ()=>{

        if(username!=='' && room!==''){

            socket.emit("join_room",{username,room});
            socket.emit("send_last_100_message",{room : room});
            navigate("/chat");
        }

        
    }

    
    return (
        <div className="">
            <div className="form_container">
                    <h1>Welcome to Developer's Rooms</h1>
                    <input type="text" placeholder="Enter Username" className='form_input' onChange={(e)=>{setUsername(e.target.value)}} />
                    <select name="" id="" className='form_input_select' onChange={(e)=>{setRoom(e.target.value)}}>
                        <option value="">Select Option</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Express JS">Express JS</option>
                        <option value="System Design">System Design</option>
                        <option value="BackEnd">BackEnd</option>
                    </select>
                    <button className="enterRoomBtn" onClick={joinRoom}>Enter Room</button>
            </div>
        </div>
    )
}