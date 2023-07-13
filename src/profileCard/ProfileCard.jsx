import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function ProfileCard(props) {
    const myref = useRef();

    const navigate = useLocation();

    const handleLogout = () =>{
      navigate("/login")
    }

    let data = JSON.parse(localStorage.getItem("loggedInUser"));
    
    let [toggle, settoggle] = useState("z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600");

    const myfunc =()=> {
        if(toggle === "z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"){
            settoggle("z-50 absolute -ml-24 block my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600")
        }else{
            settoggle("z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600")    
        }
    }
    
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (myref.current && !myref.current.contains(event.target)) {
          settoggle("z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600");
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    if(data.seller){
      return (
        <>
        <div className="ml-5" onClick={myfunc} ref={myref}>
          <button  id="profileCard" type="button" className="flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <svg className="h-6 w-6 text-teal-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div className={toggle}>
          <Link to={"/dashboard"}>
            <div className="py-3">
              <span className="block text-center text-sm text-blue-600 dark:text-white p-1">{data.firstname + " " + data.lastname}</span>
              {/* <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400 p-1">name@flowbite.com</span> */}
            </div>
            </Link>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link to={"/personal"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My Profile</Link>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Products</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Orders</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Inventory</a>
              </li>
              <li>
                <Link to={"/login"} onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>
          </div>
        </>
      )

    }else{
      // User Profile Card
      return (
        <>
        <div className="ml-5" onClick={myfunc} ref={myref}>
          <button  type="button" className="flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <svg className="h-6 w-6 text-teal-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div className={toggle}>
            <div className="py-3">
            <Link to={"/profile"}><span className="block text-center text-sm text-blue-600 dark:text-white p-1">{data.firstname + " " + data.lastname}</span></Link>
              {/* <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400 p-1">name@flowbite.com</span> */}
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link to={"/personal"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My Profile</Link>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Orders</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Wishlist</a>
              </li>
              <li>
                <Link to={"/address"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Addresses</Link>
              </li>
              <li>
                <Link to={"/login"} onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>
          </div>
        </>
      )
    }
  
}

export default ProfileCard