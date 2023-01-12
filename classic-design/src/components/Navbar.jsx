import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

function Navbar() {
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <div className="flex h-auto w-12/12 justify-center bg-white  items-center pt-10">

      <div className=' flex flex-row gap-56 '>
        <div className='flex flex-row w-1/4 gap-24'>
          <a className='text-red-400   text-lg w-45' href="shahilkv.com">Categories</a>
          <a className='text-red-400  text-lg w-45' href="shahilkv.com">Register</a>
          <a className='text-red-400  text-lg w-45' href="shahilkv.com">Login</a>
        </div>
        <div>
          <h1 className='w-56 font-semibold text-5xl'>CLASSIC<span style={{ color: "red" }}>.</span></h1>
        </div>
        <div className="w-2/4">
          {/* <Search className="pl-48" /> */}
          <input placeholder='Search here' className='rounded-lg border-black text-xl border-2 pl-4 p-2 w-64  mr-5' type="text" />
          <Link to="/cart">
            <button className='border-black bg-black text-white px-9 py-3 rounded-lg'>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
