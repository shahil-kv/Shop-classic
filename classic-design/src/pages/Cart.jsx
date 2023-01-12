import React from 'react'
// import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { useSelector } from 'react-redux'



const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    flex-direction: row;
 `

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
 `
const TopTexts = styled.div`
   
 `
const TopText = styled.div`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    
 `;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
   flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
 flex: 2;
 display: flex ;
`
const Image = styled.img`
  width: 200px;
  `
const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
  margin-bottom: 20px;
  `
const ProductAmount = styled.div`
   font-size: 24px;
   margin: 5px;

  `
const ProductPrice = styled.div`
   font-size: 30px;
   font-weight: 200;
  `
const Details = styled.div`
 padding: 20px;
 display: flex;
 flex-direction: column;
  height: 200px;
 justify-content: space-around;
 `
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50px;
   background-color: black;
  `
const ProductSize = styled.span``
const PriceDetail = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 flex: 1;
`
const Hr = styled.hr`
   background-color: #eee;
   border: none;
   height: 1px;
  `
const SummaryTitle = styled.h1`
    font-weight: 200;

`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: 200;
    font-size: 24px;
`
const SummaryItemText = styled.span`
   
`
const SummaryItemPrice = styled.span`
   
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid black;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const Flex = styled.div`
   display: flex;
`
const Title = styled.div`
    font-weight: 200;
    font-size: 40px;
    text-align: center;
    
 `
const Cart = () => {
   const cart = useSelector(state => state.cart)
   return (
      <div>
         <div className='p-20'>
            <div className='font-medium text-4xl text-center'>YOUR BAG</div>
            <Top>
               <TopButton type='filled'>CONTINUE SHOPPING</TopButton>
               <TopTexts>
                  <Flex>
                     <TopText>Shopping Bag(2)</TopText>
                     <TopText>Your Wishlist(0)</TopText>
                  </Flex>
               </TopTexts>
               <TopButton>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
               <Info>
                  <Hr />
                  {cart.products.map(product => (
                     <Product>
                        <ProductDetail>
                           <Image src={product.img} />
                           <Details>
                              <ProductName><b>Product:</b>{product.title}</ProductName>
                              <ProductId><b>ID</b>{product._id}</ProductId>
                              <ProductColor color={product.color} />
                              <ProductSize><b>Size:</b>{product.size}</ProductSize>
                           </Details>
                        </ProductDetail>
                        <PriceDetail>
                           <ProductAmountContainer>
                              <Add />
                              <ProductAmount>{product.quantity}</ProductAmount>
                              <Remove />
                           </ProductAmountContainer>
                           <ProductPrice>{product.price * product.quantity}</ProductPrice>
                        </PriceDetail>
                     </Product>
                  ))}
               </Info>
               <Summary>
                  <SummaryTitle> ORDER SUMMARY</SummaryTitle>
                  <SummaryItem>
                     <SummaryItemText>Subtotal</SummaryItemText>
                     <SummaryItemPrice>Rs{cart.total}</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText>Estimated Shipping</SummaryItemText>
                     <SummaryItemPrice>$5.90</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText>Shipping Discount</SummaryItemText>
                     <SummaryItemPrice>-$5.99</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText type='total'>Total</SummaryItemText>
                     <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                  </SummaryItem>
                  <Button>CHECKOUT NOW</Button>
               </Summary>
            </Bottom>
         </div>
         <Footer />
      </div>
   )
}

export default Cart