import './App.css'
import {Suspense, useState} from 'react'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import io from 'socket.io-client'
import Home from './pages/Home'


function App() {

  const [username,setUserName] = useState('');
  const [room,setRoom] = useState('');

  const socket = io.connect("https://localhost:3000");

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={
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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
