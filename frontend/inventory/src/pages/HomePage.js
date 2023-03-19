import React, { useState } from 'react'
import { Box } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Chance from 'chance';
const chance = new Chance();

export default function HomePage() {
  const [cartItems, setCartItems] = useState([]);
  console.log('cartItems::::', cartItems);
  const addToCart = (productName, uom, qty, id, checked) => {
    const newId = chance.bb_pin();
    let item = cartItems.find((item) => item.productName === productName);
    if (item) {
      item.qty = qty;
      item.productName = productName;
      item.uom = uom;
      item.id = newId;
      item.checked = checked;
      setCartItems([...cartItems]);
    }
    else {
      id = newId
      setCartItems((prevState) => [...prevState, { productName, uom, qty, id, checked }])
    }
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Header cartItems={cartItems} />
      <Home addToCart={addToCart} />
      <Footer />
    </Box>
  )
}
