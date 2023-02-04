import React from 'react'

function LoginWelcome() {
    let data = JSON.parse(localStorage.getItem("loggedInUser"));
  return (
    <div className="flex justify-center text-2xl mt-2 mb-5 md:mt-0 font-medium text-blue-600 dark:text-blue-500">Welcome, {data.firstname}!</div>
  )
}

export default LoginWelcome