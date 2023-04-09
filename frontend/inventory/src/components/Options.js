import React, { useState, useEffect } from 'react'
import { Box, Typography, Modal, Button, Grid, Paper, Stack, Alert } from '@mui/material'
import { OptionStyle } from '../style/OptionStyle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotesModal from './notes/NotesModal';
import Reminder from './Reminder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function Alerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Item added to shopping list!</Alert>
    </Stack>
  )
};


export default function Options({ item, addToCart, handleAlert, updateCart }) {
  const [open, setOpen] = useState(false);
  const [itemToAdd, setItemToAdd] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    setItemToAdd(item)
  }, [item])


  const addItemHandler = () => {
    const newItem = itemToAdd;
    addToCart(
      newItem.productName,
      newItem.uom,
      newItem.qty,
      newItem.id,
    )
    setOpen(false);
    handleAlert(<Alerts />);
  }

  return (
    <Box sx={OptionStyle.mainContainer}>
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
                <Typography sx={{ fontSize: 20, fontWeight: 'bold', marginBottom: 1 }}>{item.productName} </Typography>
                {item.timeStamp ?
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 2 }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold', marginRight: 2 }}>Last updated: </Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold', color: 'salmon' }}>
                      {item.timeStamp}
                    </Typography></Box> : null}
              </Grid>
              <Box sx={OptionStyle.boxWrapper}>
                <NotesModal />
                <div>
                  {/* <Button sx={OptionStyle.buttons}>Reminders</Button> */}
                  <Reminder />
                </div>
                <div>
                  <Button sx={OptionStyle.cartButton}
                    onClick={() => { addItemHandler() }}
                  ><AddShoppingCartIcon sx={{ fontSize: 35 }} /></Button>
                </div>
              </Box>
            </Paper>
          </Grid>
        </Box >
      </Modal>
    </Box>
  )
}
