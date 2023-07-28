import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginWelcome from '../common/LoginWelcome';
import DeleteAccount from './DeleteAccount';
import DeleteConfirmModal from './DeleteConfirmModal';

function UserDashboard(props) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("loggedInUser"));
  const handleDelete = () =>{
    setShowDeleteModal(true);
  }
    if(data != null){
      props.handleLogin();
      return (
        <>
        <LoginWelcome/>
    
        <div className="flex flex-col md:flex-wrap md:flex-row justify-center items-center mt-0 md:mt-0 mb-16 md:mb-16">
      <div className="m-2 rounded-lg shadow-lg bg-white w-64">
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
          <center><svg className="h-24 w-24 text-teal-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
            Personal Details
            </center>
            </h5>
          
    
            <Link to={"/personal"}><button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            view</button></Link>
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
          <Link to={"/address"}><button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
          </Link>
        </div>
      </div>

      <div className="m-2 rounded-lg shadow-lg bg-white w-64">
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            <center>
            <svg class="h-24 w-24 text-teal-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <path d="M9 14l2 2l4 -4" /></svg>
            
            Your Reviews </center></h5>
            <Link to={"/reviews"}>
            <button button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
            </Link>
        </div>
      </div>

      <div className="m-2 rounded-lg shadow-lg bg-white w-64">
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            <center>
            <svg class="h-24 w-24 text-teal-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" />  <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" />  <path d="M12 11v2a14 14 0 0 0 2.5 8" />  <path d="M8 15a18 18 0 0 0 1.8 6" />  <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" /></svg>
            
            Change Password </center></h5>
          <button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
        </div>
      </div>
    
      
    </div>
    <center>
    <button type="submit" onClick={handleDelete} className="w-6/12 mb-8 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete Account</button>
    </center>
    {/* Delete Confirmation Modal */}
    {showDeleteModal && <DeleteConfirmModal closeModal={() => setShowDeleteModal(false)} />}
        </>
      )
    }
    else{
      navigate("/login");
    }
    
}

export default UserDashboard