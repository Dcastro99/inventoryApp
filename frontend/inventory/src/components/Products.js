import React from 'react'
import { Box, Button, Grid, Paper, TextField, Typography, InputLabel, Select, MenuItem } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { ProductStyle } from '../style/ProductStyle';





export default function Products() {
  //add product handler
  const addProductHandler = (e) => {
    e.preventDefault();
    // console.log('EVENT', e.target.product_name.value)
    const formData = e.target;
    const newProduct = {
      product_name: formData.product_name.value,
      uom: formData.unit_of_measure.value,
      qty: formData.product_quantity.value
    }
    console.log('NEW PRODUCT', newProduct)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid >
        <Paper elevation={20} style={ProductStyle.paper}>
          <Grid align='center'>

            <AddCircleOutlinedIcon sx={ProductStyle.addIcon} />


          </Grid>
          <form onSubmit={addProductHandler}>
            <Typography variant='h5' sx={ProductStyle.formtext}>Product</Typography>
            <TextField label='Product Name' placeholder='Enter product name' name='product_name' fullWidth sx={ProductStyle.textFiled} />
            <Typography variant='h5' sx={ProductStyle.formtext}>Unit of Measure</Typography>
            <InputLabel id="demo-simple-select-helper-label" >Unit of Measure</InputLabel>
            <Select
              sx={{ width: 150 }}
              name='unit_of_measure'
              // value={age}
              label="Unit of Measure"
            // onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Can</MenuItem>
              <MenuItem value={20}>Bag</MenuItem>
              <MenuItem value={30}>Oz</MenuItem>
              <MenuItem value={40}>Bottle</MenuItem>
            </Select>
            <Typography variant='h5' sx={ProductStyle.formtext}>Quantity</Typography>
            <TextField label='Quantity' type='number' name='product_quantity' sx={ProductStyle.numberTextFiled} />
            <Button sx={ProductStyle.button} type='submit' variant='contained' color='primary' fullWidth >Add Product</Button>
          </form>

        </Paper>
      </Grid>
    </Box >
  )
}
