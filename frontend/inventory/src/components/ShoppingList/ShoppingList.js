import React, { useEffect, useState, useContext } from 'react'
import ProductContext from '../../context/productContext';
import { Typography, Button, TextField } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';
import { ShoppingListStyle } from '../../assets/style/ShoppingListStyle';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShoppingList({ cartItems, updateCart, decrementCart, deleteItemInCart, completedCart, completeCartFunction, clearCompletedCart, deleteCompleteCartItem }) {
  const [newItem, setNewItem] = useState({});
  const [open, setOpen] = useState(false);
  const [newQty, setNewQty] = useState(0);
  const { updateProduct } = useContext(ProductContext);
  const [completedItem, setCompletedItem] = useState({});
  const now = new Date();

  let today = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(now);

  const remind = () => {
    // console.log('Don\'t forget to buy these items')

  }

  const interval = 30 * 24 * 60 * 60 * 1000; // 30 days
  const reminder = setInterval(remind, interval);

  setTimeout(() => {
    clearInterval(reminder);
  }, 2000);

  //------------------Dialog------------------//
  const handleClickOpen = () => {
    setOpen(true);
  };

  //------------------Dialog------------------//
  const handleClose = () => {
    setOpen(false);
  };

  //------------------DELETE HANDLER------------------//
  const deleteHandler = (cartItem) => {
    deleteItemInCart(cartItem.newId)
  }

  //------------------HANDLE QTY------------------//
  const handleQty = (e) => {
    e.preventDefault();
    setNewQty(e.target.value)
  }

  //------------------HANDLE CHECK------------------//
  const handleCheck = (item) => {
    let timeStamp = today;
    const items = newItem.map(x => {
      if (x.newId === item.newId) {
        x.checked = !x.checked
        x.clearAll = true
        if (x.checked) {
          let sum = parseInt(x.qty) + parseInt(newQty);
          updateCart(
            x.productName,
            x.uom,
            x.prevQty,
            x.qty = sum,
            x.id,
            x.newId,
            x.checked,
            x.clearAll,
          )

          updateProduct(
            x.productName,
            x.uom,
            x.qty = sum,
            x.id,
            timeStamp
          );

          let itemToComplete = completedItem.find((item) => item.productName === x.productName);
          if (itemToComplete) {
            completeCartFunction(
              itemToComplete.productName = x.productName,
              itemToComplete.uom = x.uom,
              itemToComplete.prevQty = x.prevQty,
              itemToComplete.qty = x.qty,
              itemToComplete.id = x.id,
              itemToComplete.newId = x.newId,
              itemToComplete.checked = x.checked,
              itemToComplete.clearAll = x.clearAll,
            )
            setCompletedItem((prevState) => [...prevState, itemToComplete])
          }
          else {
            completeCartFunction(
              x.productName,
              x.uom,
              x.prevQty,
              x.qty,
              x.id,
              x.newId,
              x.checked,
              x.clearAll,
            )
          }

        } else if (
          !x.checked
        ) {
          let sum = parseInt(x.qty) - parseInt(x.prevQty);

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
            timeStamp
          );
        }
      }
      return x;
    });
    console.log('timestamp', today)
    setNewItem(items);
  }

  //------------------HANDLE CLEAR ALL------------------//

  const handleClearAll = () => {
    clearCompletedCart();
  }


  //------------------HANDLE UNDO------------------//

  const handleUndo = (item) => {
    let timeStamp = today;
    completedItem.map(x => {
      if (x.newId === item.newId) {
        x.checked = !x.checked;

        let sum = parseInt(x.qty) - parseInt(x.prevQty);
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
          timeStamp
        );

      }
      return x;
    });
    deleteCompleteCartItem(item.newId)
    setCompletedItem(completedItem.filter((x) => x.newId !== item.newId));

  }

  //----------------- USE EFFECT -----------------//
  useEffect(() => {
    setNewItem(cartItems)
    setCompletedItem(completedCart)
  }, [cartItems, completedCart])


  return (
    <div >
      <Button sx={ShoppingListStyle.modalButtun} onClick={handleClickOpen}>
        <ShoppingCartOutlinedIcon />
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={ShoppingListStyle.Appbar} >
          {/* <Toolbar > */}
          <IconButton
            edge="start"
            sx={ShoppingListStyle.closeModalButton}
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h2" component="div">
            Shopping List
          </Typography>
          <Box></Box>
          {/* </Toolbar> */}
        </AppBar>


        {newItem.length > 0 ? (<>
          {newItem.map((item) => {
            return (
              <>

                {item.checked === false ? (
                  < Box sx={ShoppingListStyle.mainListBox}>
                    <Box sx={ShoppingListStyle.itemBox}>
                      <Typography sx={ShoppingListStyle.productName}>{item.productName}</Typography>
                      {item.checked === true ?
                        (<TextField label="unselect" type='number' name='product_quantity' disabled error required onChange={(e) => handleQty(e)} sx={{
                          width: '80px',
                        }} />) : (<TextField label="Qty" type='number' name='product_quantity' required onChange={(e) => handleQty(e)} sx={{
                          width: '80px',
                        }} />)}
                      <Button sx={{
                        backgroundColor: '#F8F8FF',
                        color: 'grey', padding: 1, borderRadius: 2, '&:hover': {
                          backgroundColor: 'white',
                          color: '#676767',
                          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                        },
                        pointer: 'finger',
                      }} onClick={() => handleCheck(item)} >Submit</Button>
                      {/* {item.checked === false ? (<CheckBoxOutlineBlankOutlinedIcon onClick={() => handleCheck(item)} />) : (<CheckBoxOutlinedIcon onClick={() => handleCheck(item)} />)} */}
                      <div>
                        <Button sx={ShoppingListStyle.deleteItemButton} onClick={() => deleteHandler(item)}>Delete</Button>
                      </div>
                    </Box>
                    <Box sx={ShoppingListStyle.currentQtyBox}>
                      Current Qty:
                      <Typography sx={{ fontWeight: 'bold', }}>{item.qty}</Typography>
                    </Box>
                  </Box>) : (<> </>)
                }

              </>
            )
          })
          }
        </>) : (<Box sx={ShoppingListStyle.emptyCartBox}><Typography sx={ShoppingListStyle.emptyCartText}>Your shopping list is empty</Typography></Box>)}
        {completedItem.length > 0 ? (<>
          <Box sx={ShoppingListStyle.completedCartMainBox}>

            <Box sx={ShoppingListStyle.emptyCartContainer}>
              <Typography sx={ShoppingListStyle.completedCartFont}>Completed Items</Typography>

              {completedItem.map((x) => {
                return (
                  <>
                    {x.checked ? <>
                      <Box sx={ShoppingListStyle.completedCartContainer}>
                        <Box sx={ShoppingListStyle.completedCartBox}>
                          <del style={{ 'color': '#FF7F50' }}  >
                            <Typography sx={ShoppingListStyle.completeProductName}> {x.productName}</Typography></del>
                          <CheckCircleOutlineIcon sx={{ color: '#3CB371' }} />
                          <Button sx={ShoppingListStyle.undoButton} onClick={() => handleUndo(x)}><Typography sx={ShoppingListStyle.undoButtonFont}>Undo</Typography></Button>
                        </Box>
                        <Box sx={ShoppingListStyle.CompletedCurrentQtyBox}>
                          Current Qty:
                          <Typography sx={{ fontWeight: 'bold', }}>{x.qty}</Typography>
                        </Box>
                      </Box>
                    </> : <></>}
                  </>
                )
              })}
              <Box sx={ShoppingListStyle.clearAllBox}>
                <Button sx={ShoppingListStyle.clearAllButton} onClick={handleClearAll}>Clear All</Button>
              </Box>
            </Box>

          </Box>
        </>) : (<></>)}
      </Dialog>
    </div >
  );
}
