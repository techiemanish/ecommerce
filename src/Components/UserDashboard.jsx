import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import logo from './iphone14.jpg'
import ShowMoreButton from './ShowMoreButton'

function UserDashboard(props) {
    useEffect(() => {
        props.handleLogin()
    }, []);
    

    return (
    <>
    <div class="flex justify-center text-3xl mt-5 -mb-10 md:mt-0 font-medium">Welcome user</div>

    <div class="flex flex-col h-screen md:flex-row justify-center items-center md:-mt-16 ">
  <div class="m-2 rounded-lg shadow-lg bg-white w-64">
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Personal Detail</h5>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
    </div>
  </div>

  <div class="m-2 rounded-lg shadow-lg bg-white w-64">
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Your Orders</h5>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
    </div>
  </div>

  <div class="m-2 rounded-lg shadow-lg bg-white w-64">
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Your Wishlist</h5>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
    </div>
  </div>

  <div class="m-2 rounded-lg shadow-lg bg-white w-64">
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Manage Address</h5>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
    </div>
  </div>

  
</div>
    </>
  )
}

export default UserDashboard