import React from 'react'
import { Link } from 'react-router-dom'
import EmptyCart from './cart/EmptyCart'
import FilledCart from './cart/FilledCart'

function NavBar(props) {
  return (
    <>   
    <nav className="sticky top-0 bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <a href="/" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Logo"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{props.heading}</span>
            </a>
            <div className="flex items-center">
              <a href='/'>
               {props.cartStat === 0 ? <EmptyCart/> : <FilledCart/>}
              </a>
              <sup className='text-lg'><b>{props.cartStat > 0 && props.cartStat}</b></sup>
              <Link to={"/login"} className="ml-3 text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">{props.logStat}</Link>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar