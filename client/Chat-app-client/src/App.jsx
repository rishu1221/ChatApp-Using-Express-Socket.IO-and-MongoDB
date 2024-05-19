import './App.css'
import {Suspense, useState} from 'react'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import Home from './pages/Home'


function App() {

  const [username,setUserName] = useState('');
  const [room,setRoom] = useState('');


  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={
          <Suspense fallback={"Loading Home"}>
          <Home>
          </Home>
          </Suspense>}>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
