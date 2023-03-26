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

export default function ShoppingList({ cartItems, clearCart, deleteItem, updateCart, decrementCart }) {
  const [newItem, setNewItem] = useState('');
  const [open, setOpen] = useState(false);
  const [newQty, setNewQty] = useState(0);
  const { updateProduct } = useContext(ProductContext);
  console.log('cartItems}}}}}}}}}}', cartItems)
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
    setNewItem(newItems)
    deleteItem(cartItem.newId);
    setNewQty('');
  }

  const handleQty = (e) => {
    e.preventDefault();
    console.log('e.target', e.target.value)

    setNewQty(e.target.value)

  }


  const handleCheck = (item) => {
    console.log(' item=====>', item)
    const items = newItem.map(x => {
      if (x.newId === item.newId) {
        x.checked = !x.checked

        if (x.checked) {
          console.log('item passing in addCartProduct!', item)
          console.log('item.qty', x.qty)
          console.log('item.prevQty', x.prevQty)
          console.log('newQTY', newQty)
          let sum = parseInt(x.qty) + parseInt(newQty);
          updateCart(
            x.productName,
            x.uom,
            x.prevQty,
            x.qty = sum,
            x.id,
            x.newId,
            x.checked
          )

          updateProduct(
            x.productName,
            x.uom,
            x.qty = sum,
            x.id,
          );
        } else if (
          !x.checked
        ) {
          console.log('item passing in decrement!', item)
          console.log('item.qty', x.qty)
          console.log('item.prevQty', x.prevQty)
          console.log('newQTY', newQty)
          let sum = parseInt(x.qty) - parseInt(x.prevQty);
          console.log('sum::::::::::::', sum)
          setNewQty(x.prevQty);

          decrementCart(
            x.productName,
            x.uom,
            x.prevQty = sum,
            x.qty = sum,
            x.id,
            x.newId,
            x.checked
          )

          updateProduct(
            x.productName,
            x.uom,
            x.qty = sum,
            x.id,
          );

        }
      }

      return x;
    });

    setNewItem(items);


  }


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
                    {/* {console.log('item.checked', item.checked)} */}
                    {item.checked === true ? (<Typography sx={{ fontWeight: 'bold', fontSize: 20, }}><del>{item.productName}</del></Typography>) : (<Typography sx={{ fontWeight: 'bold', fontSize: 20, }}>{item.productName}</Typography>)}

                    {/* {console.log('itemzzzz', item)} */}
                    {/* <Typography sx={{ color: 'lightGray' }}>{item.qty}</Typography> */}
                    <TextField label="Qty" type='number' name='product_quantity' required onChange={(e) => handleQty(e)} sx={{
                      width: '80px',
                    }} />
                    {item.checked === false ? (<CheckBoxOutlineBlankOutlinedIcon onClick={() => handleCheck(item)} />) : (<CheckBoxOutlinedIcon onClick={() => handleCheck(item)} />)}

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
