import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <Box sx={{
      backgroundColor: 'pink',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Typography variant="h4">Login</Typography>
    </Box>
  )
}
