import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function ProfileCard(props) {
    let data = JSON.parse(localStorage.getItem("loggedInUser"));
    
    const [toggle, settoggle] = useState("z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600");

    const myfunc =()=> {
        if(toggle === "z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"){
            settoggle("z-50 absolute -ml-24 block my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600")
        }else{
            settoggle("z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600")
        }
    }
    if(data.seller){
      return (
        <>
        <div class="ml-5">
          <button onClick={myfunc} id="profileCard" type="button" class="flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span class="sr-only">Open user menu</span>
            <svg class="h-6 w-6 text-teal-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div class={toggle}>
          <Link to={"/dashboard"}>
            <div class="py-3">
              <span class="block text-center text-sm text-blue-600 dark:text-white p-1">{data.firstname + " " + data.lastname}</span>
              {/* <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400 p-1">name@flowbite.com</span> */}
            </div>
            </Link>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link to={"/personal"} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My Profile</Link>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Products</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Orders</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Inventory</a>
              </li>
              <li>
                <Link to={"/login"} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
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
        <div class="ml-5">
          <button onClick={myfunc} type="button" class="flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span class="sr-only">Open user menu</span>
            <svg class="h-6 w-6 text-teal-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div class={toggle}>
            <div class="py-3">
            <Link to={"/profile"}><span class="block text-center text-sm text-blue-600 dark:text-white p-1">{data.firstname + " " + data.lastname}</span></Link>
              {/* <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400 p-1">name@flowbite.com</span> */}
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link to={"/personal"} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My Profile</Link>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Orders</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Wishlist</a>
              </li>
              <li>
                <Link to={"/address"} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Addresses</Link>
              </li>
              <li>
                <Link to={"/login"} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>
          </div>
        </>
      )
    }
  
}

export default ProfileCard