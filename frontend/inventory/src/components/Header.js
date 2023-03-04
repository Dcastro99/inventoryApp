import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Header() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h3">My Inventory App</Typography>
    </Box>
  )
}
