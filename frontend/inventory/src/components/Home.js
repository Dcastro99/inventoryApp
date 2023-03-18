import React from 'react'
import { Box } from '@mui/material'
import Products from './Products'
import BasicTable from './InventoryTable'



export default function Home({ addToCart }) {


  return (
    <Box sx={{
      // backgroundColor: 'pink',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    }}>
      <BasicTable addToCart={addToCart} />
      <Products />
    </Box>


  )
}
