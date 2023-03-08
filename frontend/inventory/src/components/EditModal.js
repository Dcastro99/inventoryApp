import React, { useState, useContext } from 'react'
import { Box, Typography, Modal, Button, TextField, Select, MenuItem, Grid, Paper, InputLabel } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { ProductStyle } from '../style/ProductStyle';
import ProductContext from '../context/productContext';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


export default function EditModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { addProduct } = useContext(ProductContext);
  // const { deleteProduct } = useContext(ProductContext);
  console.log('item in EditModal', props.item)
  //add product handler
  const addProductHandler = (e) => {
    e.preventDefault();
    const formData = e.target;
    addProduct(
      formData.product_name.value,
      formData.unit_of_measure.value,
      formData.product_quantity.value
    )
    setOpen(false);
  }



  return (
    <Box sx={{
      // backgroundColor: 'pink',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box  >
        <Button sx={{ color: 'Tomato', backgroundColor: 'WhiteSmoke', marginTop: 5 }} onClick={handleOpen}><EditOutlinedIcon /></Button>
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
                <form onSubmit={addProductHandler}>
                  <Typography variant='h5' sx={ProductStyle.formtext}>Product</Typography>
                  <TextField label='Product Name' name='product_name' fullWidth sx={ProductStyle.textFiled} />
                  <Typography variant='h5' sx={ProductStyle.formtext}>Unit of Measure</Typography>
                  <InputLabel id="demo-simple-select-helper-label" >Unit of Measure</InputLabel>
                  <Select
                    sx={{ width: 150 }}
                    placeholder={props.item.uom}
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
                  <TextField label='Quantity' type='number' name='product_quantity' placeholder={props.item.quantity} sx={ProductStyle.numberTextFiled} />
                  <Button sx={ProductStyle.button} type='submit' variant='contained' color='primary' fullWidth >Add Product</Button>
                </form>

              </Paper>
            </Grid>
          </Box >

        </Modal>

      </Box>
    </Box>
  )
}
