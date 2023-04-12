import React from 'react'
import { Box, Typography } from '@mui/material'
import ShoppingList from '../ShoppingList/ShoppingList'
import { HeaderStyle } from '../../assets/style/HeaderStyle';
import logo from '../../assets/images/MP.png'


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
      <img src={logo} style={{}} alt='logo' width='90' />
      <Box sx={HeaderStyle.titleBox}>
        <Typography sx={HeaderStyle.mainTitle} variant="h3">Welcome</Typography>
        <Typography sx={HeaderStyle.mainTitle} variant="h3">to</Typography>
        <Typography sx={HeaderStyle.mainTitle} variant="h3">MyPantry</Typography>
      </Box>
      <Box sx={HeaderStyle.mainBox}>
        {/* <Box sx={HeaderStyle.buttonContainer} > */}
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
        {/* </Box> */}
      </Box>
    </Box >
  )
}
