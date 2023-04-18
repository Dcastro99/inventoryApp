import React, { useState, useContext } from 'react'
import { Box, Typography, Modal, Button, TextField, Select, MenuItem, Grid, Paper, InputLabel } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { ProductStyle } from '../../assets/style/ProductStyle';
import ProductContext from '../../context/productContext';
import Chance from 'chance';
const chance = new Chance();


export default function Products({ alert }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { addProduct } = useContext(ProductContext);



  //------------- ADD PRODUCT HANDLER --------------//

  const addProductHandler = (e) => {

    e.preventDefault();
    const formData = e.target;
    console.log('WHAT??', formData.product_category.value)
    const id = chance.bb_pin();
    const checked = false;
    addProduct(
      formData.product_name.value,
      formData.product_category.value,
      formData.unit_of_measure.value,
      formData.product_quantity.value,
      id,
      checked
    )
    setOpen(false);
  }



  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <Box  >
          <Button sx={ProductStyle.modalButton} onClick={handleOpen}>Add Product</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={ProductStyle.mainBox}>
              <Grid >
                <Paper elevation={20} style={ProductStyle.paper}>
                  <Grid align='center'>
                    <AddCircleOutlinedIcon sx={ProductStyle.addIcon} />
                  </Grid>
                  <form onSubmit={(e) => { addProductHandler(e) }}>
                    <Typography variant='h5' sx={ProductStyle.formtext}>Product</Typography>
                    <TextField label='Product Name' placeholder='Enter product name' name='product_name' fullWidth sx={ProductStyle.textFiled} />
                    <Typography variant='h5' sx={ProductStyle.formtext}>Category</Typography>

                    <InputLabel id="demo-simple-select-helper-label" >Category</InputLabel>
                    <Select
                      sx={{ width: 175 }}
                      name='product_category'
                      label="Category"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'spices'}>Spices</MenuItem>
                      <MenuItem value={'grains'}>Grains</MenuItem>
                      <MenuItem value={'sauces'}>Sauces</MenuItem>
                      <MenuItem value={'canned goods'}>Canned Goods</MenuItem>
                    </Select>
                    <Typography variant='h5' sx={ProductStyle.formtext}>Unit of Measure</Typography>

                    <InputLabel id="demo-simple-select-helper-label" >Unit of Measure</InputLabel>
                    <Select
                      sx={{ width: 100 }}
                      name='unit_of_measure'
                      label="Unit of Measure"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'Can'}>Can</MenuItem>
                      <MenuItem value={'Bag'}>Bag</MenuItem>
                      <MenuItem value={'Oz'}>Oz</MenuItem>
                      <MenuItem value={'Bottle'}>Bottle</MenuItem>
                      <MenuItem value={'Box'}>Box</MenuItem>
                    </Select>

                    <Typography variant='h5' sx={ProductStyle.formtext}>Quantity</Typography>
                    <TextField label='Quantity' type='number' name='product_quantity' sx={ProductStyle.numberTextFiled} />
                    <Button sx={ProductStyle.button} type='submit' variant='contained' fullWidth >Add Product</Button>
                  </form>

                </Paper>
              </Grid>
            </Box >

          </Modal>

        </Box>

      </Box >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
        {alert}
      </Box>
    </>
  )
}
