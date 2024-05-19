import './App.css'
import {Suspense, useState} from 'react'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import io from 'socket.io-client'
import Home from './pages/Home'
import Chat from './pages/Chat/Chat'

const socket = io.connect("http://localhost:3000");

function App() {

  const [username,setUserName] = useState('');
  const [room,setRoom] = useState('');

  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={
          <Suspense fallback={"Loading Home"}>
          <Home
            username={username}
            setUserName = {setUserName}
            setRoom = {setRoom}
            room={room}
            socket={socket}>
          </Home>
          </Suspense>}>
        </Route>
        <Route 
          path="/chat"
          element={
            <Suspense fallback={"Loading Chats"}>
              <Chat username = {username} room = {room} socket={socket}>
              </Chat>
            </Suspense>}>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
