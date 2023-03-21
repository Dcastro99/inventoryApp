import React, { useState, useEffect } from 'react'
import { Box, Typography, Modal, Button, Grid, Paper, Stack, Alert } from '@mui/material'
import { OptionStyle } from '../style/OptionStyle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotesModal from './notes/NotesModal';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function Alerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Item added to shopping list!</Alert>
    </Stack>
  )
};


export default function Options({ item, addToCart, handleAlert }) {
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
    const checked = false;
    console.log('itemToAdd', newItem);
    addToCart(
      newItem.productName,
      newItem.uom,
      newItem.qty,
      newItem.id,
      checked

    )
    setOpen(false);
    handleAlert(<Alerts />);
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
