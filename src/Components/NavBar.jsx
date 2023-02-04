import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTimer } from 'react-timer-hook';
import EmptyCart from '../cart/EmptyCart'
import FilledCart from '../cart/FilledCart'
import ProfileCard from '../profileCard/ProfileCard';


function NavBar(props) {
  const navigate = useNavigate();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 900);
  let expiryTimestamp = time;
  // const {
  //   seconds,
  //   minutes,
  //   hours,
  //   days,
  //   isRunning,
  //   start,
  //   pause,
  //   resume,
  //   restart,
  // } = useTimer({ expiryTimestamp, onExpire: () => navigate("/login") });

  return (
    <>   
    <nav className="sticky top-0 bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <Link to={"/"} className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Logo"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{props.heading}</span>
            </Link>
            <div className="flex items-center">
              {/* Timer for login session */}
              {/* {localStorage.getItem("loggedInUser") !== null ?<p id="timer" className='text-sm mr-1 font-medium text-blue-600 dark:text-blue-500'>
                {minutes}:{seconds}</p> : ""} */}
                {/* {localStorage.getItem("loggedInUser") !== null ?<ProfileCard/>: ""} */}
              <a href='/'>
               {props.cartStat === 0 ?  <EmptyCart/>: <FilledCart/>}
              </a>
              <sup className='text-lg'><b>{props.cartStat > 0 && props.cartStat}</b></sup>
              {localStorage.getItem("loggedInUser") !== null 
              ?<ProfileCard/>
              :<Link to={"/login"} className="ml-5 text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">{props.logStat}</Link>}
              
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar