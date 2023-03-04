import React from 'react'
import { Box, Grid, Paper, TextField, Typography } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

export default function Products() {
  const Style = {
    paper: {
      padding: '30px 20px',
      width: 300,
      margin: '20px auto'
    },
    formtext: {
      margin: '10px 0'
    },
    textFiled: {
      margin: '0 0 20px'
    },
    addIcon: {
      fontSize: 40
    }
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid >
        <Paper elevation={20} style={Style.paper}>
          <Grid align='center'>

            <AddCircleOutlinedIcon sx={Style.addIcon} />


          </Grid>
          <form>
            <Typography variant='h5' sx={Style.formtext}>Add Product</Typography>
            <TextField label='Product Name' placeholder='Enter product name' fullWidth sx={Style.textFiled} />
            <Typography variant='h5' sx={Style.formtext}>Add Quantity</Typography>
            <TextField label='Quantity' placeholder='Enter product quantity' fullWidth sx={Style.textFiled} />
          </form>

        </Paper>
      </Grid>
    </Box>
  )
}
