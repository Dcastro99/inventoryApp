import React, { useState } from 'react'
import { Box } from '@mui/material'
import Products from './Products'
import InventoryTable from './InventoryTable'




export default function Home({ addToCart }) {
  const [alert, setAlert] = useState(false);

  const handleAlert = (x) => {
    setAlert(x);
  }

  const ClearOut = () => {
    setAlert('');
  }

  setTimeout(ClearOut, 2000)

  return (
    <Box sx={{
      // backgroundColor: 'pink',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    }}>
      <InventoryTable addToCart={addToCart} handleAlert={handleAlert} />
      <Products alert={alert} />
    </Box>


  )
}
