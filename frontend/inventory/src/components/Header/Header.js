import React from 'react'
import { Box, Typography, Card, CardMedia } from '@mui/material'
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
      {/* <img src={logo} alt='logo' width='90' /> */}
      <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
        <CardMedia
          component="img"
          image={logo}
          sx={{ height: '95px', border: 'none', backgroundColor: 'transparent' }}
          title="MyPantry"
        />
      </Card>
      <Box sx={HeaderStyle.titleBox}>
        <Typography sx={HeaderStyle.mainTitle} variant="h3">Welcome</Typography>
        <Typography sx={HeaderStyle.mainTitle} variant="h3">to</Typography>
        <Typography sx={HeaderStyle.mainTitle} variant="h3">MyPantry</Typography>
      </Box>
      <Box sx={HeaderStyle.mainBox}>
        {/* <Box sx={HeaderStyle.buttonContainer} > */}
        <Card elevation={0} sx={{ backgroundColor: 'transparent', padding: 2 }}>
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
        </Card>
      </Box>
    </Box >
  )
}
