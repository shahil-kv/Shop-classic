import React from 'react'
// import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useState } from 'react'
import { useEffect } from 'react'
import { userRequest } from '../requestMethod'
import { useNavigate } from 'react-router-dom'




const Info = styled.div`
   flex:3;
`
const ProductDetail = styled.div`
 flex: 2;
 display: flex ;
`











const Cart = () => {
   const cart = useSelector(state => state.cart)

   const [stripeToken, setStripeToken] = useState(null)
   const history = useNavigate

   const onToken = (token) => {
      setStripeToken(token)
   }
   useEffect(() => {
      const makeRequest = async () => {
         try {
            const res = await userRequest.post("/checkout/payment", {
               tokenId: stripeToken.id,
               amount: cart.total * 100,
            })
            console.log(res)
            history('/success', { data: res.data })
         } catch (e) {
            console.log(`shahil ${e}`)
         }
      };
      stripeToken && makeRequest()
   }, [stripeToken, cart.total, history])
   return (
      <div>
         <div className='p-20'>
            <div className='font-medium text-4xl text-center'>YOUR BAG</div>
            <div className='flex  justify-between items-center p-5 flex-row ' >
               <button type='filled' className='p-3 font-semibold cursor-pointer bg-black text-white'>CONTINUE SHOPPING</button>
               <div>
                  <div className='flex'>
                     {/* <button className='p-3 font-semibold cursor-pointer bg-black text-white'>CHECKOUT NOW</button> */}
                     <div className='underline cursor-pointer ml-3 mr-3'>Shopping Bag(2)</div>
                     <div className='underline cursor-pointer ml-3 mr-3'>Your Wishlist(0)</div>
                  </div>
               </div>
            </div>
            <div className='flex justify-between'>
               <Info>
                  <hr className='bg-white border-none h-1' />
                  {cart.products.map(product => (
                     <div className='flex justify-between' >
                        <ProductDetail>
                           <img className='w-80' alt='imgCart' src={product.img} />
                           <div className='p-5 flex flex-col h-52 justify-around'>
                              <span><b>Product:</b>{product.title}</span>
                              <span><b>ID</b>{product._id}</span>
                              <div className='w-5 h-5 rounded-3xl bg-black' color={product.color} />
                              <span><b>Size:</b>{product.size}</span>
                           </div>
                        </ProductDetail>
                        <span className='flex items-center flex-col justify-center flex-1'>
                           <div className='flex items-center mb-5'>
                              <Add />
                              <div className='text-2xl m-2'>{product.quantity}</div>
                              <Remove />
                           </div>
                           <div className='text-3xl font-light'>{product.price * product.quantity}</div>
                        </span>
                     </div>
                  ))}
               </Info>
               <div className='flex-1 border-2 border-black p-5 h-4/4'>
                  <h1 className='font-normal'> ORDER SUMMARY</h1>
                  <div className='flex justify-between font-extralight text-2xl mt-6'>
                     <span>Subtotal</span>
                     <span>Rs{cart.total}</span>
                  </div>
                  <div className='flex justify-between font-extralight text-2xl mt-6'>
                     <span>Estimated Shipping</span>
                     <span>$5.90</span>
                  </div>
                  <div className='flex justify-between font-extralight text-2xl mt-6'>
                     <span>Shipping Discount</span>
                     <span>-$5.99</span>
                  </div>
                  <div className='flex justify-between font-extralight text-2xl mt-6 '>
                     <span type='total'>Total</span>
                     <span>{cart.total}</span>
                  </div>
                  <StripeCheckout
                     name='Classic Shop'
                     image=''
                     billingAddress
                     shippingAddress
                     description={`your total is ${cart.total}`}
                     amount={cart.total * 100}
                     token={onToken}
                     stripeKey="pk_test_51LQ9JfSBfNSorDV7IRbz8kMSMAWJ5Kj5nnua4DFoGwF6kC4QEymmabhfmlzaW3IVDucpRNnhOrfL6ZpbIHJcbW4U00rD9MDqTw"

                  >
                  </StripeCheckout>

               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default Cart