import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
const Container = styled.div`
    
 `
const FilterContainer = styled.div`
     display: flex;
     justify-content: space-between;
 `
const Title = styled.div`
  margin: 20px;
  font-weight: 400;
  font-size: 40px;
 `
const Filter = styled.div`
    margin: 20px;
 `
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 400;
    margin-right: 20px;
 `
const Select = styled.select`
     padding: 10px;
     margin-right: 20px;
  `
const Option = styled.option`
    
  `
const ProductList = () => {
   // we are getting the data of our current location werw we are sitting
   const location = useLocation()
   // then we are doing the split method to split them
   const cat = location.pathname.split("/")[2];
   const [filter, setFilters] = useState({})
   const handleFilters = (e) => {
      console.log(`shahil  ${e}`)
      const value = e.target.value
      setFilters({
         ...filter,
         [e.target.name]: value,
      });
   };
   console.log(filter)
   return (
      <Container>
         <Navbar />
         <Title>Dresses</Title>
         <FilterContainer>
            <Filter>
               <FilterText>Filter Products :</FilterText>
               <Select name='color' onChange={handleFilters}>
                  <Option disabled  > Color</Option>
                  <Option> White</Option>
                  <Option> Black</Option>
                  <Option> Red</Option>
                  <Option> Blue</Option>
                  <Option> Yellow</Option>
                  <Option> Green</Option>
               </Select>
               <Select name='size' onChange={handleFilters}>
                  <Option disabled >Size</Option>
                  <Option> XS</Option>
                  <Option> S</Option>
                  <Option> M</Option>
                  <Option> L</Option>
                  <Option> XL</Option>
               </Select>
            </Filter>
            <Filter>
               <FilterText>Sort Products</FilterText>
               <Select>
                  <Option selected >Newest</Option>
                  <Option> Price(asc)</Option>
                  <Option> Price(desc)</Option>
               </Select>
            </Filter>
         </FilterContainer>
         <Products />
         <Footer />
      </Container>
   )
}

export default ProductList