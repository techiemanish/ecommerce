import React from 'react'
import LoginWelcome from './LoginWelcome';
import axios from 'axios';
import DeleteReviewsModal from './DeleteReviewsModal';

function Reviews() {
    let data = JSON.parse(localStorage.getItem("loggedInUser"));
    
    const handleDelete = ()=>{
        
    }
    return (
    <>
    <LoginWelcome />
    <div className="flex flex-col md:flex-wrap md:flex-row justify-center items-center mt-0 md:mt-0 mb-8 md:mb-8">
    
    {data.reviews.map((value) => {
        return (
        <>
        <div className="m-2 rounded-lg shadow-lg bg-white w-64">
            <div className="p-2">
            <center>
            <p>Product Id: {value.productId}</p>
            <br/>
                <p className="">
                {value.comment}
                <br />
                {value.date}
                </p>
            </center>
            <br/>
            <DeleteReviewsModal data={value}/>
            {/* <button type="submit" onClick={handleDelete} className="w-full mb-8 float-right text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete review</button> */}
            </div>
            </div>
        </>
        );
    })}
    </div>
    </>)
}

export default Reviews