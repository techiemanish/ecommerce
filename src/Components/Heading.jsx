import React from 'react'
import { Link } from 'react-router-dom'

function Heading(props) {
  return (
    <nav className="bg-gray-50 dark:bg-gray-700">
    <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
        <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <Link to={"/"} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to={"/mobiles"} className="text-gray-900 dark:text-white hover:underline">Mobiles</Link>
                </li>
                <li>
                    <a href="/" className="text-gray-900 dark:text-white hover:underline">Electronics</a>
                </li>
                <li>
                    <a href="/" className="text-gray-900 dark:text-white hover:underline">Clothing</a>
                </li>
                <li>
                    <a href="/" className="text-gray-900 dark:text-white hover:underline">Others</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Heading