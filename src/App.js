import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import React from 'react'
import Home from './Components/Home';
import Register from './Components/Register';
import Mobiles from './Components/Mobiles';

function App() {
  return (
    <>
    <NavBar heading="E-Commerce" contact="+91-9999999999"/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/mobiles" element={<Mobiles/>}/>
    </Routes>
    <Footer heading="E-Commerce"/>
    </>
  );
}

export default App;
