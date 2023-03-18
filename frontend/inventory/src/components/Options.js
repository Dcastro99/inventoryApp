import React, { useState, useEffect } from 'react'
import { Box, Typography, Modal, Button, Grid, Paper } from '@mui/material'
import { OptionStyle } from '../style/OptionStyle';
// import ProductContext from '../context/productContext';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotesModal from './notes/NotesModal';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Chance from 'chance';
const chance = new Chance();

export default function Options({ item, addToCart }) {
  const [open, setOpen] = useState(false);
  const [itemToAdd, setItemToAdd] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // const { addItemToSHPLST } = useContext(ProductContext);
  console.log('props in Options::', item);

  useEffect(() => {
    setItemToAdd(item)
  }, [item])

  const addItemHandler = () => {
    const newItem = itemToAdd;
    const id = chance.bb_pin();
    console.log('itemToAdd', newItem);
    addToCart(
      newItem.productName,
      newItem.qty,
      newItem.uom,
      newItem.id
    )
    // addItemToSHPLST(
    //   itemToAdd.productName,
    //   itemToAdd.qty,
    //   itemToAdd.uom,
    //   itemToAdd.id = id
    // )
  }

  return (
    <Box sx={{
      // backgroundColor: 'pink',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Button sx={OptionStyle.mainButton} onClick={handleOpen}> <MoreHorizIcon /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={OptionStyle.mainBox}>
          <Grid >
            <Paper elevation={20} style={OptionStyle.paper}>
              <Grid align='center'>
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>{item.productName} options</Typography>
              </Grid>
              <Box sx={{
                // backgroundColor: 'pink',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 5,
              }}>
                <NotesModal />
                <Button sx={OptionStyle.buttons}>Reminders</Button>
                <Button sx={{
                  backgroundColor: 'white',
                  color: '#626D75',
                  borderRadius: '10px',
                  divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                  },
                  margin: 1
                }}
                  onClick={() => { addItemHandler() }}
                ><AddShoppingCartIcon /></Button>
              </Box>

            </Paper>
          </Grid>
        </Box >

      </Modal>

    </Box>
  )
}
