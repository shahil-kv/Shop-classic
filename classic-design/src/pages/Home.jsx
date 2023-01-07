import React from 'react'
import Footer from '../components/Footer'
import Products from '../components/Products'
import ReviewN from '../components/ReviewN'
import Categories from '../components/Categories'
import Things from '../components/things'
// import Reviews from '../components/Reviews'
import Slide from '../components/Slide'
const Home=()=> {
  return (
    <div>

    <Slide/>
   <Categories/>
   <Things/>
    <Products/>
    {/* <Reviews/> */}
    <ReviewN/>
    <Footer/>
    </div>
  )
} 

export default Home