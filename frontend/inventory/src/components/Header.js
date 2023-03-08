import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Header() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 110 }}>
      <Typography variant="h3">Welcome to MyPantry</Typography>
    </Box>
  )
}
