
import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'
const Container = styled.div`
  display: flex;
   flex-wrap: wrap;
   margin: 50px 10% 0px 10%;
   justify-content: space-between;
 `
const Products = ({ cat, filters, sort }) => {
  //  
  const [products, SetProducts] = useState([]);
  // whenever we update the filtered product we will update the product and show
  const [filterProducts, setFilteredProducts] = useState([]);
  // when the category changes please run the function inside the useEffect 
  // when ever the dependency category is changed then work the useEffect function inside that
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products")
        SetProducts(res.data)
      } catch (err) {

      }
    };
    getProducts()
  }, [cat]);

  // filtereing

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter(item => Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
        )
      );
  }, [products, cat, filters])

  // sorting

  useEffect(() => {
    if ((sort === 'newest')) {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if ((sort === 'asc')) {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort])


  return (
    <Container>
      {cat ? filterProducts.map((item) => (
        <Product item={item} id={item.id} />
      )) : products
        .slice(0, 8)
        .map((item) => (
          <Product item={item} id={item.id} />
        ))}
    </Container>
  )
}

export default Products