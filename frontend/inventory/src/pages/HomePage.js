import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import '../assets/style/Pic.css'
import axios from 'axios';
import Chance from 'chance';
const chance = new Chance();

export default function HomePage() {
  const [cartItems, setCartItems] = useState([]);
  const [completedCart, setCompletedCart] = useState([]);
  // const [allProducts, setAllProducts] = useState([]);
  //hello

  const handleAddCart = async (data) => {
    console.log('DATA going to the backend', data)
    const config = {
      method: 'POST',
      baseURL: process.env.REACT_APP_VERCEL_URL,
      url: '/carts',
      data: data
    }
    const response = await axios(config);
    console.log('RESPONSE', response);
  }



  //------------------ADD TO CART------------------//
  const addToCart = (productName, uom, qty, id, category, checked) => {
    // console.log('before adding to cart', productName, uom, qty, id)
    const newId = chance.bb_pin();
    // const checked = false;
    const clearAll = false;
    const prevQty = qty;
    let item = cartItems.find((item) => item.productName === productName);
    if (item) {
      item.productName = productName;
      item.uom = uom;
      item.prevQty = prevQty;
      item.qty = qty;
      item._id = id
      item.category = category;
      item.checked = checked;
      item.cartID = newId;
      item.clearAll = clearAll;
      setCartItems([...cartItems]);
    }
    else {

      setCartItems((prevState) => [...prevState, { productName, uom, prevQty, qty, id, category, checked, newId, clearAll }]);
      handleAddCart({ productName, uom, prevQty, qty, id, category, checked, newId, clearAll })
    }
  }

  //------------------UPDATE CART------------------//
  const updateCart = (productName, uom, prevQty, qty, id, newId, checked, clearAll) => {
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
      item.clearAll = clearAll;
      setCartItems([...cartItems]);
    }
    else {
      setCartItems((prevState) => [...prevState, { productName, uom, prevQty, qty, id, checked, newId, clearAll }]);
    }
  }

  //------------------DECREMENT CART------------------//

  const decrementCart = (productName, uom, prevQty, qty, id, newId, checked) => {
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

  //------------------DELETE ITEM IN CART------------------//
  const deleteItemInCart = (id) => {
    setCartItems(cartItems.filter((item) => item.newId !== id));
  }

  //------------------COMPLETE CART------------------//
  const completeCartFunction = (productName, uom, prevQty, qty, id, newId, checked) => {
    let item = cartItems.find((item) => item.newId === newId);
    if (item) { // if item exists, update qty
      item.qty = qty;
      item.prevQty = prevQty;
      item.productName = productName;
      item.uom = uom;
      item.id = id;
      item.newId = newId;
      item.checked = checked;
      setCompletedCart([...completedCart, item]);
      setCartItems(cartItems.filter((item) => item.newId !== newId));
    }
    else {
      setCompletedCart((prevState) => [...prevState, { productName, uom, prevQty, qty, id, checked, newId }]);
    }
  }

  const deleteCompleteCartItem = (id) => {
    setCompletedCart(completedCart.filter((item) => item.newId !== id));
    if (completedCart.length === 0) {
      console.log('Hit in clear complete cart')
      setCompletedCart([]);
    }
  }

  const clearCompletedCart = () => {
    setCompletedCart([]);
  }


  return (
    // <div className='pic'>

    <Box sx={{
      // display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'
    }}>
      <Header
        completedCart={completedCart}
        cartItems={cartItems}
        updateCart={updateCart}
        decrementCart={decrementCart}
        deleteItemInCart={deleteItemInCart}
        completeCartFunction={completeCartFunction}
        clearCompletedCart={clearCompletedCart}
        deleteCompleteCartItem={deleteCompleteCartItem}
      />
      <Home addToCart={addToCart} />
      <Footer />
    </Box>
    // </div>
  )
}
