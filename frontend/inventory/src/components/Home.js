import React, { useState } from 'react'
import { Box } from '@mui/material'
import Products from './Products'
import BasicTable from './InventoryTable'



export default function Home() {


  return (
    <Box sx={{
      // backgroundColor: 'pink',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <BasicTable />
      <Products />
    </Box>


  )
}
