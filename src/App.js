import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import React, { useState } from 'react'
import Home from './Components/Home';
import Register from './Components/Register';
import Mobiles from './Components/Mobiles';
import UserDashboard from './Components/UserDashboard';

function App() {
  let logStat = "Login";
  const [logStatus, setlogStatus] = useState(logStat);

  let productCount = 0;

  const [cartCount, setcartCount] = useState(productCount);


  return (
    <>
    <NavBar logStat={logStatus} cartStat={cartCount} heading="E-Commerce"/>
    <Routes>
      <Route exact path='/' element={<Home handleCart={()=>setcartCount(cartCount+1)}/>}/>
      <Route exact path='/login' element={<Login handleLogout={()=>setlogStatus("Login")}/> }/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/mobiles" element={<Mobiles handleCart={()=>setcartCount(cartCount+1)}/>}/>
      <Route exact path="/dashboard" element={<UserDashboard handleLogin ={() =>setlogStatus("log out")} />}/>
    </Routes>
    <Footer heading="E-Commerce"/>
    </>
  );
}

export default App;
