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
   const [filters, setFilters] = useState({})
   const [sort, setSort] = useState('newest')
   // when we click on the button then the handleFilter will work and then there we will get the click event and the target adn the value
   const handleFilters = (e) => {
      const value = e.target.value
      const target = e.target.name;
      // first we recieve the value 
      // then we recieve the name of the target the changed 
      console.log(value);
      setFilters({
         // we will set the array of filters into the array of target and the value to the filter array
         ...filters,
         [target]: value,
      });
   };

   return (
      <Container>
         <Navbar />
         <Title>{cat}</Title>
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
               <Select onChange={e => setSort(e.target.value)} >
                  <Option value={'newest'}>Newest</Option>
                  <Option value={'asc'}> Price(asc)</Option>
                  <Option value={'desc'}> Price(desc)</Option>
               </Select>
            </Filter>
         </FilterContainer>
         {/* we imported the cat the user clicked and the filter the user used and the sort to the product section so we can change there */}
         <Products cat={cat} filters={filters} sort={sort} />
         <Footer />
      </Container>
   )
}

export default ProductList