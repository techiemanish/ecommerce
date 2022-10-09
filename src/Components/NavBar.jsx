import React from 'react'
import { Link } from 'react-router-dom'


function NavBar(props) {
  return (
    <>   
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <a href="/" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{props.heading}</span>
            </a>
            <div className="flex items-center">
                <a href="tel:+919999999999" className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">{props.contact}</a>
                <Link to={"/login"} className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar