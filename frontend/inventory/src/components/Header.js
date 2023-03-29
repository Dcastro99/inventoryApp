import React from 'react'
import { Box, Typography } from '@mui/material'
import ShoppingList from './ShoppingList'
import { HeaderStyle } from '../style/HeaderStyle';


export default function Header({ cartItems, updateCart, decrementCart, deleteItemInCart }) {
  return (
    <Box sx={HeaderStyle.mainContainer}>
      <Box sx={HeaderStyle.titleBox}>
        <Typography sx={HeaderStyle.mainTitle} variant="h3">Welcome to MyPantry</Typography>
      </Box>
      <Box sx={HeaderStyle.mainBox}>
        <Box sx={HeaderStyle.buttonContainer} >
          <div>
            <ShoppingList
              cartItems={cartItems}
              deleteItemInCart={deleteItemInCart}
              updateCart={updateCart}
              decrementCart={decrementCart}
            />
          </div>
        </Box>
      </Box>
    </Box >
  )
}
