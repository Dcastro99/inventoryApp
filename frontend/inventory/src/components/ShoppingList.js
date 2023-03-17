import React, { useContext, useEffect, useState } from 'react'
import { Typography, Button } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ProductContext from '../context/productContext';
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

export default function ShoppingList() {
  const { itemInShoppingCart, deleteItemInSHPLST } = useContext(ProductContext);
  const [newItem, setNewItem] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setNewItem(itemInShoppingCart)
  }, [itemInShoppingCart])

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
        <AppBar sx={{ position: 'relative', backgroundColor: 'gray' }}>
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

        {itemInShoppingCart.length > 0 ? (<>
          {newItem.map((item) => {
            return (
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemText primary={item.productName} secondary={item.qty} />
                </ListItem>
                <Button onClick={() => deleteItemInSHPLST(item.id)}>Delete</Button>
                <Divider />
              </List>
            )

          })
          }
        </>) : (<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}><Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px', maxWidth: 360, fontSize: 20, fontWeight: 'bold', padding: 5, borderRadius: 5, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', backgroundColor: 'whitesmoke' }}>Your shopping list is empty</Typography></Box>)}
      </Dialog>
    </div >
  );
}
