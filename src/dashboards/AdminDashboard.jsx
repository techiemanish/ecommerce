import React, { useEffect } from 'react'

function AdminDashboard(props) {
    useEffect(() => {
        props.handleLogin()
    }, []);
    

    return (
    <>
    <div className="flex justify-center text-2xl mt-2 mb-5 md:mt-0 font-medium">Welcome, Admin!</div>

    <div className="flex flex-col h-screen md:flex-row justify-center items-center mt-40 md:-mt-40 mb-40 md:-mb-16">
  <div className="m-2 rounded-lg shadow-lg bg-white w-64">
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">
      <center><svg className="h-24 w-24 text-teal-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
        My Profile
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
        
        New Product </center></h5>
        
      <button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ADD</button>
    </div>
  </div>

  <div className="m-2 rounded-lg shadow-lg bg-white w-64">
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">
        <center>
        <svg className="h-24 w-24 text-teal-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
        
        Your Orders </center></h5>
      <button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
    </div>
  </div>

  <div className="m-2 rounded-lg shadow-lg bg-white w-64">
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">
        <center>
        <svg class="h-24 w-24 text-teal-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>    <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" />    <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(60 12 12)" />    <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(120 12 12)" />    <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(180 12 12)" />    <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(240 12 12)" />    <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(300 12 12)" />  </svg>
        Inventory</center></h5>
      <button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
    </div>
  </div>

  
</div>
    </>
  )
}

export default AdminDashboard