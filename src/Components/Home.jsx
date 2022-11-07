import React from 'react'
import Heading from './Heading'
import Products from './Products'
import ShowCase from './ShowCase'

function Home(props) {
  return (
    <>
    <Heading/>
    <ShowCase/>
    <Products handleCart= {props.handleCart}/>
    </>
  )
}

export default Home