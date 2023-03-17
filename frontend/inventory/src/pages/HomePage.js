import React from 'react'
import { Box } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'

export default function HomePage() {
  return (
    <Box sx={{ width: '100%' }}>
      <Header />
      <Home />
      <Footer />
    </Box>
  )
}
