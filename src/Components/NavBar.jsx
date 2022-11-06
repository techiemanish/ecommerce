import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <>   
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <a href="/" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Logo"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{props.heading}</span>
            </a>
            <div className="flex items-center">
              <a href='/' className=''>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              </a><sup className='text-lg'><b>0</b></sup>
              <Link to={"/login"} className="ml-2 text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">{props.logStat}</Link>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar