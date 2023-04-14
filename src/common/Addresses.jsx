import React from 'react'
import { Link } from 'react-router-dom'
import AddressModal from '../Address/AddressModal';
import LoginWelcome from './LoginWelcome'

function Addresses(props) {
  let data = JSON.parse(localStorage.getItem("loggedInUser"));
  return (
    <>
  <LoginWelcome />
  <div className="flex flex-col md:flex-wrap md:flex-row justify-center items-center mt-0 md:mt-0 mb-8 md:mb-8">
    
    {data.address.map((value) => {
      return (
        <>
        <div className="m-2 rounded-lg shadow-lg bg-white w-64">
          <div className="p-2">
            <center>
              <p className="">
                {value.firstName + " " + value.lastName}
                <br />
                {value.city}, {value.street}, {value.landmark}, {value.state}, {value.pincode}
                <br />
                {value.mobile}
              </p>
            </center>
            <AddressModal data={value}/>
          </div>
          </div>
        </>
      );
    })}
    <div className="m-2 rounded-lg shadow-lg bg-white w-64">
          <div className="p-2">
          <center>
          <svg class="h-40 w-40 text-teal-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg></center>
          </div>
          </div>

  </div>
</>

    )
  
}

export default Addresses