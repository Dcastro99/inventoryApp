import React, { useState } from 'react'
import { Box } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Chance from 'chance';
const chance = new Chance();

export default function HomePage() {
  const [cartItems, setCartItems] = useState([]);
  // console.log('cartItems::::', cartItems);


  const addToCart = (productName, uom, qty, id) => {
    // console.log('before adding to cart', productName, uom, qty, id)
    const newId = chance.bb_pin();
    const checked = false;
    const prevQty = qty;
    let item = cartItems.find((item) => item.productName === productName);
    if (item) {
      item.productName = productName;
      item.uom = uom;
      item.prevQty = prevQty;
      item.qty = qty;
      item.id = id
      item.checked = checked;
      item.cartID = newId;
      setCartItems([...cartItems]);
    }
    else {

      setCartItems((prevState) => [...prevState, { productName, uom, prevQty, qty, id, checked, newId }])
    }
  }

  const updateCart = (productName, uom, prevQty, qty, id, newId, checked) => {
    console.log('updateCart', productName, uom, prevQty, qty, id, newId, checked)
    let item = cartItems.find((item) => item.newId === newId);
    if (item) { // if item exists, update qty
      let sum = parseInt(qty) - parseInt(prevQty)
      item.qty = qty;
      item.prevQty = sum;
      item.productName = productName;
      item.uom = uom;
      item.id = id;
      item.newId = newId;
      item.checked = checked;
      setCartItems([...cartItems]);
    }
    else {
      setCartItems((prevState) => [...prevState, { productName, uom, prevQty, qty, id, checked, newId }]);
    }
  }

  const decrementCart = (productName, uom, prevQty, qty, id, newId, checked) => {
    console.log('decrementCart', productName, uom, prevQty, qty, id, newId, checked)
    let item = cartItems.find((item) => item.newId === newId);
    if (item) { // if item exists, update qty

      item.qty = qty;
      item.prevQty = prevQty;
      item.productName = productName;
      item.uom = uom;
      item.id = id;
      item.newId = newId;
      item.checked = checked;
      setCartItems([...cartItems]);
    }
    else {
      setCartItems((prevState) => [...prevState, { productName, uom, prevQty, qty, id, checked, newId }]);
    }
  }

  const clearCart = () => {
    setCartItems([]);
  }

  const deleteItem = (id) => {

    setCartItems(cartItems.filter((x) => x.cartID !== id.id));
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Header
        cartItems={cartItems}
        clearCart={clearCart}
        deleteItem={deleteItem}
        updateCart={updateCart}
        decrementCart={decrementCart}
      />

      <Home addToCart={addToCart} />
      <Footer />
    </Box>
  )
}
