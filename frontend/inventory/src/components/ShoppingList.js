import React, { useEffect, useState, useContext } from 'react'
import ProductContext from '../context/productContext';
import { Typography, Button, TextField } from '@mui/material'
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShoppingList({ cartItems, clearCart, deleteItem }) {
  const [newItem, setNewItem] = useState('');
  const [open, setOpen] = useState(false);
  const [newQty, setNewQty] = useState();
  const [isChecked, setIsChecked] = useState('');
  const { addProduct, decrementProduct, } = useContext(ProductContext);
  // console.log('newQty!', newQty)
  console.log('newItem!', newItem)
  console.log('isChecked!', isChecked)
  console.log('cartItems!', cartItems)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteHandler = (cartItem) => {
    console.log('delete item', cartItem)
    let newItems = newItem.filter(item => {
      if (item.productName === cartItem.productName) {
        item.checked = false;
      }
      return item;
    })
    setIsChecked(false)
    // resetProduct(cartItem)
    setNewItem(newItems)
    deleteItem(cartItem.newId);
    setNewQty('');

  }

  const handleCheck = (item) => {
    console.log('add item', item)
    const items = newItem.map(x => {
      if (x.checked === false
      ) {
        x.checked = !x.checked
        addProduct(
          item.productName,
          item.uom,
          item.qty = newQty,
          item.id,
          item.checked

        )
        setIsChecked(true)
      }
      else if (x.checked === true) {
        x.checked = !x.checked
        decrementProduct(
          item.productName,
          item.uom,
          item.qty,
          item.id,
          item.checked,
          item.newQty = newQty
        )
        setIsChecked(false)
      }

      return x
    });
    setNewItem(items)

    // addProduct(items)
  };

  const handleClearAll = () => {
    clearCart();
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

          </Toolbar>
        </AppBar>

        {newItem.length > 0 ? (<>
          {newItem.map((item) => {
            return (
              <>
                < Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 1 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 500, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', padding: 2, borderRadius: 2 }}>
                    {console.log('item.checked', item.checked)}
                    <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>{isChecked === true ? <del>{item.productName}</del> : item.productName}</Typography>
                    {console.log('itemzzzz', item)}
                    {/* <Typography sx={{ color: 'lightGray' }}>{item.qty}</Typography> */}
                    <TextField label="Qty" type='number' name='product_quantity' required onChange={(e) => setNewQty(e.target.value)} sx={{
                      width: '80px',
                    }} />
                    <Box sx={{ color: 'black', }} onClick={() => handleCheck(item)}>{item.checked === false ? (<CheckBoxOutlineBlankOutlinedIcon />) : (<CheckBoxOutlinedIcon />)}</Box>
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
                    }} onClick={() => deleteHandler(item)}>Delete</Button>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 175, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', padding: 4, borderRadius: 2, marginLeft: 5 }}>
                    Current Qty:
                    <Typography sx={{ fontWeight: 'bold', }}>{item.qty}</Typography>
                  </Box>
                </Box>

              </>
            )
          })
          }
        </>) : (<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}><Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px', maxWidth: 360, fontSize: 20, fontWeight: 'bold', padding: 5, borderRadius: 5, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', backgroundColor: 'whitesmoke' }}>Your shopping list is empty</Typography></Box>)}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button sx={{
            backgroundColor: 'white',
            color: '#626D75',
            borderRadius: '10px',
            divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            }, marginTop: 10,
            maxWidth: 360,
          }} onClick={handleClearAll}>Clear All</Button>
        </Box>
      </Dialog>
    </div >
  );
}
