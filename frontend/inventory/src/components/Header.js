import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import ShoppingList from './ShoppingList'


export default function Header({ cartItems, clearCart, deleteItem, updateCart, decrementCart }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 110 }}>
      <Box sx={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 110 }}>
        <Typography sx={{ marginLeft: 15, fontFamily: 'Dancing Script', fontSize: 70 }} variant="h3">Welcome to MyPantry</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 4 }}>
        <Button sx={{
          backgroundColor: 'white',
          color: '#626D75',
          borderRadius: '10px',
          divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
          }

        }} ><ShoppingList
            cartItems={cartItems}
            clearCart={clearCart}
            deleteItem={deleteItem}
            updateCart={updateCart}
            decrementCart={decrementCart}
          />
        </Button>
      </Box>
    </Box >
  )
}
