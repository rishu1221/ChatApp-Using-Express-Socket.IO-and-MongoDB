import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import Chat from './Pages/Chat/Chat'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {io} from 'socket.io-client'

const socket = io.connect("http://localhost:3000")

function App() {

  const [username,setUsername] = useState("")
    const [room,setRoom] = useState("");


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home socket={socket} username={username} setUsername={setUsername} room={room} setRoom={setRoom}></Home>}></Route>
          <Route path={"/chat"} element={<Chat socket={socket} username={username} setUsername={setUsername} room={room} setRoom={setRoom}></Chat>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
