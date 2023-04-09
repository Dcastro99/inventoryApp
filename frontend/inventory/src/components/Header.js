import React from 'react'
import { Box, Typography } from '@mui/material'
import ShoppingList from './ShoppingList'
import { HeaderStyle } from '../style/HeaderStyle';
import logo from '../images/MP.png'


export default function Header({ cartItems,
  updateCart, decrementCart,
  deleteItemInCart,
  completedCart,
  completeCartFunction,
  clearCompletedCart,
  deleteCompleteCartItem
}) {
  return (
    <Box sx={HeaderStyle.mainContainer}>
      <Box sx={{ marginLeft: 1 }}><img src={logo} alt='logo' width='120' /></Box>
      <Box sx={HeaderStyle.titleBox}>
        <Typography sx={HeaderStyle.mainTitle} variant="h3">Welcome to MyPantry</Typography>
      </Box>
      <Box sx={HeaderStyle.mainBox}>
        <Box sx={HeaderStyle.buttonContainer} >
          <ShoppingList
            cartItems={cartItems}
            deleteItemInCart={deleteItemInCart}
            updateCart={updateCart}
            decrementCart={decrementCart}
            completedCart={completedCart}
            completeCartFunction={completeCartFunction}
            clearCompletedCart={clearCompletedCart}
            deleteCompleteCartItem={deleteCompleteCartItem}
          />
        </Box>
      </Box>
    </Box >
  )
}
