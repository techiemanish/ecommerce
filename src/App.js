import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import React, { useEffect, useState } from 'react'
import Home from './Components/Home';
import Register from './Components/Register';
import Mobiles from './Components/Mobiles';
import UserDashboard from './dashboards/UserDashboard';
import axios from 'axios';
import AdminDashboard from './dashboards/AdminDashboard';

function App() {
  let logStat = "Login";
  const [logStatus, setlogStatus] = useState(logStat);
  const [status, setstatus] = useState("flex w-3 h-3 bg-red-500 rounded-full float-right mt-1 md:float-right md:mt-1");

  let productCount = 0;

  const [cartCount, setcartCount] = useState(productCount);

  useEffect(()=>{
    axios.get("https://ecommerce-api-4fpf.onrender.com/")
    .then((res)=>{
    if(res.status === 200){
        setstatus("flex w-3 h-3 bg-green-500 rounded-full float-right mt-1 md:float-right md:mt-1");
    }
  })
  }, [])

  return (
    <>
    <NavBar logStat={logStatus} cartStat={cartCount} heading="E-Commerce"/>
    <Routes>
      <Route exact path='/' element={<Home handleCart={()=>setcartCount(cartCount+1)}/>}/>
      <Route exact path='/login' element={<Login handleLogout={()=>setlogStatus("Login")}/> }/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/mobiles" element={<Mobiles handleCart={()=>setcartCount(cartCount+1)}/>}/>
      <Route exact path="/profile" element={<UserDashboard handleLogin ={() =>setlogStatus("log out")} />}/>
      <Route exact path="/dashboard" element={<AdminDashboard handleLogin ={() =>setlogStatus("log out")} />}/>
    </Routes>
    <Footer heading="E-Commerce" webstat = {status}/>
    </>
  );
}

export default App;
