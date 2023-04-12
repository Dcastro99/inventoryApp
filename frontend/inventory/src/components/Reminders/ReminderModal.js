import * as React from 'react';
import { Box, Button, Dialog, AppBar, Toolbar, IconButton, Typography, Slide } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Reminders from './RemindersMain';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Reminder() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button sx={{
        backgroundColor: 'WhiteSMoke',
        color: 'Tomato',
        borderRadius: '10px',
        divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        '&:hover': {
          backgroundColor: 'white',
          color: 'Tomato',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        },
        margin: 1
      }} onClick={handleClickOpen}>
        Reminders
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: 'gray' }}>
          {/* <Toolbar> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 2 }}>
            <IconButton
              sx={{ borderRadius: 50 }}
              // edge="start"
              // color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ marginRight: 2 }} variant="h2" component="div">
              Reminders
            </Typography>
            <Box></Box>
          </Box>
          {/* </Toolbar> */}
        </AppBar>
        {/* <Box> */}
        <Reminders />
        {/* </Box> */}
      </Dialog>
    </div >
  );
}
