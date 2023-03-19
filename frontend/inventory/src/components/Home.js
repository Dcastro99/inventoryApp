import React, { useState } from 'react'
import { Box } from '@mui/material'
import Products from './Products'
import BasicTable from './InventoryTable'




export default function Home({ addToCart }) {
  const [alert, setAlert] = useState(false);

  const handleAlert = (x) => {
    setAlert(x);
  }

  function ClearOut() {
    setAlert('');
  }

  setTimeout(ClearOut, 8000)

  return (
    <Box sx={{
      // backgroundColor: 'pink',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    }}>
      <BasicTable addToCart={addToCart} handleAlert={handleAlert} />
      <Products alert={alert} />
    </Box>


  )
}
