import axios from 'axios'
import React, { useEffect } from 'react'
import Heading from './Heading'
import Products from './Products'
import ShowCase from './ShowCase'

function Home(props) {

  // useEffect(()=>{
  //   axios.get("https://ecommerce-api-4fpf.onrender.com/")
  //   .then((res)=>{
  //   if(res.status == 200){
  //       console.log("Success");
  //   }
  // })
  // }, [])
  

  return (
    <>
    <Heading/>
    <ShowCase/>
    <Products handleCart= {props.handleCart}/>
    </>
  )
}

export default Home