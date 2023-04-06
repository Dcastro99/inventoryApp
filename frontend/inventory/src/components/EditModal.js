import React, { useState, useContext, useEffect } from 'react'
import { Box, Typography, Modal, Button, TextField, Select, MenuItem, Grid, Paper, InputLabel } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { ProductStyle } from '../style/ProductStyle';
import ProductContext from '../context/productContext';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


export default function EditModal({ item }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newName, setNewName] = useState('');
  const [newQty, setNewQty] = useState('');
  const [newUnit, setNewUnit] = useState('');
  const { updateProduct } = useContext(ProductContext);

  const updateProductHandler = (e) => {
    let id = item.id
    e.preventDefault();
    const formData = e.target;
    // console.log('formData------>', formData)
    updateProduct(
      formData.product_name.value,
      formData.unit_of_measure.value,
      // formData.product_quantity.value,
      formData.product_quantity.value,
      id
    )

    setOpen(false);
  }



  useEffect(() => {
    setNewName(item.productName)
    setNewQty(item.qty)
    setNewUnit(item.uom)
  }, [item.productName, item.qty, item.uom])

  return (
    <Box sx={{
      // backgroundColor: 'pink',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box  >
        <Button sx={ProductStyle.editModalButton} onClick={handleOpen}><EditOutlinedIcon /></Button>
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
                <form onSubmit={(e) => { updateProductHandler(e) }}>
                  <Typography variant='h5' sx={ProductStyle.formtext}>Product</Typography>
                  <TextField name='product_name' onChange={(e) => setNewName(e.target.value)} fullWidth sx={ProductStyle.textFiled} value={newName} >
                    {newName}
                  </TextField>
                  <Typography variant='h5' sx={ProductStyle.formtext} >Unit of Measure</Typography>
                  <InputLabel id="demo-simple-select-helper-label" >Unit of Measure</InputLabel>
                  <Select
                    sx={{ width: 150 }}
                    value={newUnit}
                    name='unit_of_measure'
                    label="Unit of Measure"
                    onChange={(e) => setNewUnit(e.target.value)}
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
                  <TextField label="Qty" type='number' name='product_quantity' value={newQty} onChange={(e) => setNewQty(e.target.value)} sx={ProductStyle.numberTextFiled} />
                  <Button sx={ProductStyle.button} type='submit' variant='contained' color='primary' fullWidth >Update</Button>
                </form>

              </Paper>
            </Grid>
          </Box >

        </Modal>

      </Box>
    </Box>
  )
}
