import React from 'react'
import Login from './LoginPages/Login'
import Signup from './LoginPages/SignUp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App