import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginWelcome from './LoginWelcome';

function Profile(props) {
    let data = JSON.parse(localStorage.getItem("loggedInUser"));
    const navigate = useNavigate();
    // console.log(data);
    if(data != null){
        return (
            <>
            <LoginWelcome/>
            <div className="p-4 m-5 w-full max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <p><b>Name : </b>{data.firstname + " " + data.lastname}</p><br/>
            <p><b>Email : </b>{data.email}</p><br/>
            <p><b>Mobile Number : </b>{data.phone}</p><br/>
            <p><b>Adreess : </b>
            {data.address.length === 0
            ? 
                <><Link className='underline' to={"/address"}>Add address</Link></> 
            : 
                data.address.map((value)=>{
                    return(
                    <>
                    <p className='ml-20 -mt-6'> {value.firstName + " " + value.lastName}<br/>
                    {value.city}, {value.street}, {value.landmark}, {value.state}, {value.pincode}<br/>
                    {value.mobile}
                    </p><br/>
                    <br/>
                    </>)
                })
            }
            {
                data.address.length !== 0 ? <Link className='underline float-right -mt-5' to={"/address"}>Manage address</Link> : ""
            }
            </p>
            </div>
            </>
            
          )
    }
    else{
        navigate("/login");
    }
  
}

export default Profile