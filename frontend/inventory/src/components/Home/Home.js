import React, { useState } from 'react'
import { Box } from '@mui/material'
import Products from '../Products/Products'
import InventoryTable from '../InventoryTable/InventoryTable'
import Categories from '../Categories/Categories';




export default function Home({ addToCart, allProducts }) {
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
      // backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'column',

      alignItems: 'center',
      width: '100%',
      // marginBottom: 10,
      // height: '100%',
    }}>
      <Categories />
      <InventoryTable addToCart={addToCart} handleAlert={handleAlert} allProducts={allProducts} />
      <Products alert={alert} />
    </Box>


  )
}
