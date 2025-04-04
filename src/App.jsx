import React from 'react'
import Login from './LoginPages/Login'
import Signup from './LoginPages/SignUp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPass from './Help/ForgetPass';
import NeedHelp from './Help/NeedHelp';
import UserPannel from './components/Pannels/UserPannel';
import ResturantPannel from './components/Pannels/ResturantPannel';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/forget' element={<ForgetPass/>}/>
          <Route path='/help' element={<NeedHelp/>}/>
          <Route path="/foodies" element={<UserPannel/>}/>
          <Route path="/restaurant" element={<ResturantPannel/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App