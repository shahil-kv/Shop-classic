import React from 'react'
import Footer from '../components/Footer'
import Products from '../components/Products'
import ReviewN from '../components/ReviewN'
import Categories from '../components/Categories'
// import Reviews from '../components/Reviews'
import Slide from '../components/Slide'
const Home=()=> {
  return (
    <div>

    <Slide/>
   <Categories/>
    <Products/>
    {/* <Reviews/> */}
    <ReviewN/>
    <Footer/>
    </div>
  )
} 

export default Home