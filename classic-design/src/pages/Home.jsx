import React from 'react'
import Footer from '../components/Footer'
import Products from '../components/Products'
import ReviewN from '../components/ReviewN'
import Categories from '../components/Categories'
import Things from '../components/things'

import Slide from '../components/Slide'
const Home = () => {
  return (
    <div>

      <Slide />
      <Categories />
      <Things />
      <Products />
      <ReviewN />
      <Footer />
    </div>
  )
}

export default Home