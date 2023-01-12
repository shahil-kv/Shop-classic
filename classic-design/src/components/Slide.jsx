import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
// import background from './Files/backgroundpic.jpg'

function Slide() {
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <section
      // style={
      //   {
      //     backgroundImage: `url({{window.location.origin +/"Files/backgroundpic.jpg"}})`,
      //     backgroundPosition: 'center',
      //     backgroundSize: 'cover',
      //     backgroundRepeat: 'no-repeat'
      //   }
      // }
      className=' h-screen  pr-400 pl-52 pt-10 '>
      {/* <img src={window.location.origin + '/Files/backgroundpic.jpg'} alt="" /> */}
      {/* navbar section */}
      <div className=' flex flex-row gap-40 '>
        <div className='flex flex-row w-1/4 gap-14'>
          <a className='text-red-400   text-lg w-45' href="shahilkv.com">Categories</a>
          <a className='text-red-400  text-lg w-45' href="shahilkv.com">Register</a>
          <a className='text-red-400  text-lg w-45' href="shahilkv.com">Login</a>
        </div>
        <div>
          <h1 className='w-56 font-semibold text-5xl'>CLASSIC<span style={{ color: "red" }}>.</span></h1>
        </div>

        <div>
          {/* <Search className='p-20'/>  */}
          <input placeholder='Search here' className='rounded-lg border-black text-xl border-2 pl-4 p-2 w-64 ml-20 mr-5' type="text" />
          <Link to="/cart">
            <button className='border-black bg-black text-white px-9 py-3 rounded-lg'>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </button>
          </Link>
        </div>
      </div>
      {/* end of navbar */}
      <div>
        <div className=' w-full '>
          <h1 className='font-semibold text-8xl mt-56 w-5/12 h-46 leading-snug'>The perfect Tool you need</h1>
        </div>
        <p className='opacity-75 pl-2 mt-10 mb-20'>Simple Easy and comfortable</p>
        <div>
          <button className='rounded-md px-10 py-4 bg-red-400 mr-10'>Buy Now</button>
          <button className='rounded-md px-10 py-4 bg-red-400'>About</button>
        </div>
      </div>
    </section>
  )
}

export default Slide