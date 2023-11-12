import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/signin'
import Tables from './pages/tables'
import { AddForm } from './pages/addfrom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes >
      <Route path="/addfromdata" element={<AddForm />}  />
      <Route path="/addform/:id" element={<AddForm />}  />

      <Route path="/" element={<SignIn />}  />
      <Route path="/tables" element={<Tables />}  />


     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
