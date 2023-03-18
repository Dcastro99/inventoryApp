import React, { useEffect, useState } from 'react'
import { Typography, Button } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShoppingList({ cartItems }) {
  const [newItem, setNewItem] = useState('');
  const [open, setOpen] = React.useState(false);
  console.log('newItem in Cart!', newItem)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteItem = (id) => {
    setNewItem(newItem.filter((x) => x.id !== id));
  }

  useEffect(() => {
    setNewItem(cartItems)
  }, [cartItems])

  return (
    <div >
      <Button sx={{
        backgroundColor: 'white',
        color: '#626D75',
        borderRadius: '10px',
        divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        '&:hover': {
          backgroundColor: 'white',
          color: 'black',
        }
      }} onClick={handleClickOpen}>
        <ShoppingCartOutlinedIcon />
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: 'gray', marginBottom: 10 }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 92, flex: 1 }} variant="h2" component="div">
              Shopping List
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>

        {newItem.length > 0 ? (<>
          {newItem.map((item) => {
            return (

              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 360, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', padding: 2, borderRadius: 2 }}>

                  <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>{item.productName}</Typography>
                  <Typography sx={{ color: 'lightGray' }}>{item.qty}</Typography>

                  <Button sx={{
                    backgroundColor: 'white',
                    color: '#FF7F50',
                    borderRadius: '10px',
                    divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                    '&:hover': {
                      backgroundColor: 'smokeWhite',
                      color: 'red',
                    },
                    margin: 1
                  }} onClick={() => deleteItem(item.id)}>Delete</Button>
                </Box>
              </Box>

            )

          })
          }
        </>) : (<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}><Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px', maxWidth: 360, fontSize: 20, fontWeight: 'bold', padding: 5, borderRadius: 5, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', backgroundColor: 'whitesmoke' }}>Your shopping list is empty</Typography></Box>)}
      </Dialog>
    </div >
  );
}
