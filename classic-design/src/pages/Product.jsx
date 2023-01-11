import { Add, Remove } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { publicRequest } from '../requestMethod'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div`
    
`
const Wrapper = styled.div`
   padding: 50px;
   display: flex;
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`
const Title = styled.h1`
   font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
    font-weight: 400;
    font-size: 30px;
`
const Price = styled.span`
   font-weight: 400;
   font-size:40px ;
`
const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 50%;
   margin: 30px 0px;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`
const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
   margin: 0px 5px;
   cursor: pointer;
`
const FilterSize = styled.select`
 margin-left: 10px;
`
const FilterSizeOption = styled.option`
  
`
const AddContainer = styled.div`
   display: flex;
    justify-content: space-between;
   align-items: center;
   width: 50%;
`
const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 400;
`
const Amount = styled.span`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid teal;
   display: flex;
   align-items: center;
   justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
   padding: 15px;
   border: 2px solid teal;
   background-color: white;
   cursor: pointer;
   font-weight: 400;

   &:hover{
    background-color: yellow;
   }
`
const AboutSection = styled.div`
   margin-top: 90px;
`
const ParaS = styled.p`
   font-weight: 400;
`
const AboutTitle = styled.p`
    margin-bottom: 30px;
`
const Hr = styled.hr`
  width: 65px;

`

const Product = () => {
  const location = useLocation()
  // then we are doing the split method to split them
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("");
  const [size, setSize] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data)
      } catch {

      }
    }
    getProduct()
  })

  const handleQuantity = (type) => {
    if (type === 'dec') {
      if (quantity > 1) {
        setQuantity(quantity - 1)
      } else {
        setQuantity(quantity)
      }
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    )
  }


  return (
    <Container>
      <Navbar />
      <Wrapper></Wrapper>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} alt='shahil' />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor key={c} color={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>

          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <button onClick={() => handleQuantity('dec')}> <Remove /> </button>
              <Amount>{quantity}</Amount>
              <button onClick={() => handleQuantity('incr')}> <Add /> </button>
            </AmountContainer>
            <Button onClick={handleClick} >ADD TO CART</Button>
          </AddContainer>
          <AboutSection>
            <AboutTitle>About <Hr></Hr> </AboutTitle>
            <ParaS>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae saepe totam, ab libero excepturi amet fuga provident! Neque nihil veritatis aspernatur quod eveniet hic ea, sit labore optio commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae saepe totam, ab libero excepturi amet fuga provident! Neque nihil veritatis aspernatur quod eveniet hic ea, sit labore optio commodi.</ParaS>
          </AboutSection>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Product