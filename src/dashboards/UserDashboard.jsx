import React from 'react'
import { useNavigate } from 'react-router-dom';

function UserDashboard(props) {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("loggedInUser"));
    if(data != null){
      props.handleLogin();
      return (
        <>
        <div className="flex justify-center text-2xl mt-2 mb-5 md:mt-0 font-medium">Welcome, {data.firstname}!</div>
    
        <div className="flex flex-col h-screen md:flex-row justify-center items-center mt-40 md:-mt-40 mb-40 md:-mb-16">
      <div className="m-2 rounded-lg shadow-lg bg-white w-64">
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
          <center><svg className="h-24 w-24 text-teal-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
            Personal Details
            </center>
            </h5>
          
    
          <button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
        </div>
      </div>
    
      <div className="m-2 rounded-lg shadow-lg bg-white w-64">
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            <center>
            <svg className="h-24 w-24 text-teal-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />  <line x1="3" y1="6" x2="21" y2="6" />  <path d="M16 10a4 4 0 0 1-8 0" /></svg>
            
            Your Orders </center></h5>
            
          <button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
        </div>
      </div>
    
      <div className="m-2 rounded-lg shadow-lg bg-white w-64">
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            <center>
            <svg className="h-24 w-24 text-teal-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
            
            Your Wishlist </center></h5>
          <button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
        </div>
      </div>
    
      <div className="m-2 rounded-lg shadow-lg bg-white w-64">
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            <center>
            <svg className="h-24 w-24 text-teal-300"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
    </svg>
            
            Manage Addresses</center></h5>
          <button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
        </div>
      </div>
    
      
    </div>
        </>
      )
    }
    else{
      navigate("/");
    }
    
}

export default UserDashboard