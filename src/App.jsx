import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Multiform from './pages/multipleform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/dashboard' element={<Multiform />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
