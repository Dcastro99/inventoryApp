import React, { useState } from 'react'
import { Box, Typography, Modal, Button, Grid, Paper } from '@mui/material'
import { OptionStyle } from '../style/OptionStyle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotesModal from './notes/NotesModal';


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
                <NotesModal />
                <Button sx={OptionStyle.buttons}>Reminders</Button>
              </Box>

            </Paper>
          </Grid>
        </Box >

      </Modal>

    </Box>
  )
}
