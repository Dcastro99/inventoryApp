import React, { useState } from 'react'
import { Box, Typography, Modal, Button, TextField, Select, MenuItem, Grid, Paper, InputLabel } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { ProductStyle } from '../style/ProductStyle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export default function Options(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log('props in Options', props)

  return (
    <Box sx={{
      // backgroundColor: 'pink',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Button sx={{
        color: 'black',
        borderRadius: '10px',
        '&:hover': {
          backgroundColor: 'white',
          color: '#B8B8B8',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        },
      }} onClick={handleOpen}> <MoreHorizIcon /></Button>
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
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>{props.item.productName} options</Typography>
              </Grid>
              <Box sx={{
                // backgroundColor: 'pink',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 5,
              }}>
                <Button sx={{ padding: 2 }}>Notes</Button>
                <Button sx={{ padding: 2 }}>Reminders</Button>
              </Box>

            </Paper>
          </Grid>
        </Box >

      </Modal>

    </Box>
  )
}
