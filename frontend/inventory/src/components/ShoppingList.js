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
import { ShoppingListStyle } from '../style/ShoppingListStyle';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShoppingList({ cartItems, updateCart, decrementCart, deleteItemInCart }) {
  const [newItem, setNewItem] = useState('');
  const [open, setOpen] = useState(false);
  const [newQty, setNewQty] = useState(0);
  const { updateProduct } = useContext(ProductContext);
  const [completedItem, setCompletedItem] = useState([]);
  // let map = new Map();
  // console.log('newItemssssssw', newItem)
  // console.log('completedItem', completedItem)

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
    const items = newItem.map(x => {
      if (x.newId === item.newId) {
        x.checked = !x.checked
        // console.log('item checked', item.checked)
        // console.log('x checked', x.checked)
        if (x.checked) {
          let sum = parseInt(x.qty) + parseInt(newQty);
          // console.log('x.prevQty', x.prevQty)
          // console.log('newQty', newQty)
          // console.log('Newqty+', sum)
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
          let itemToComplete = completedItem.find((item) => item.productName === x.productName);
          if (itemToComplete) {
            itemToComplete.productName = x.productName;
            itemToComplete.uom = x.uom;
            itemToComplete.qty = x.qty;
            itemToComplete.id = x.id;
            itemToComplete.newId = x.newId;
            itemToComplete.checked = x.checked;

            setCompletedItem([...completedItem]);
          }
          else {

            setCompletedItem((prevState) => [...prevState, x])

          }

        } else if (
          !x.checked
        ) {
          let sum = parseInt(x.qty) - parseInt(x.prevQty);
          // console.log('x.prevQty', x.prevQty)
          // console.log('newQty', newQty)
          // console.log('Newqty+', sum)
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


  //------------------HANDLE CLEAR ALL------------------//

  const handleClearAll = () => {

    for (let i = 0; i < newItem.length; i++) {
      if (newItem[i].newId === completedItem[i].newId) {
        // console.log('newItem[i].newId', newItem[i].newId)
        deleteItemInCart(newItem[i].newId)
        setCompletedItem(completedItem.filter((x) => x.newId !== completedItem[i].newId));
      }
    }

  }


  //------------------HANDLE UNDO------------------//

  const handleUndo = (item) => {
    let items = newItem.map(x => {
      if (x.newId === item.newId) {
        x.checked = !x.checked;


        let sum = parseInt(x.qty) - parseInt(x.prevQty);
        // console.log('x.prevQty', x.prevQty)
        // console.log('newQty', newQty)
        // console.log('Newqty+', sum)
        // console.log('x.checked', x.checked)
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
      return x;
    });
    setNewItem(items);
    setCompletedItem(completedItem.filter((x) => x.newId !== item.newId));
  }


  useEffect(() => {
    setNewItem(cartItems)
  }, [cartItems])


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
        <AppBar sx={ShoppingListStyle.Appbar}>
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

                {item.checked === false ? (
                  < Box sx={ShoppingListStyle.mainListBox}>
                    <Box sx={ShoppingListStyle.itemBox}>
                      {/* {console.log('item.checked', item.checked)} */}
                      {item.checked === true ? (<Typography sx={ShoppingListStyle.productName}><del>{item.productName}</del></Typography>) : (<Typography sx={ShoppingListStyle.productName}>{item.productName}</Typography>)}

                      {/* {console.log('itemzzzz', item)} */}
                      {/* <Typography sx={{ color: 'lightGray' }}>{item.qty}</Typography> */}
                      {item.checked === true ?
                        (<TextField label="unselect" type='number' name='product_quantity' disabled error required onChange={(e) => handleQty(e)} sx={{
                          width: '80px',
                        }} />) : (<TextField label="Qty" type='number' name='product_quantity' required onChange={(e) => handleQty(e)} sx={{
                          width: '80px',
                        }} />)}
                      {item.checked === false ? (<CheckBoxOutlineBlankOutlinedIcon onClick={() => handleCheck(item)} />) : (<CheckBoxOutlinedIcon onClick={() => handleCheck(item)} />)}
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
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>

            <Box sx={ShoppingListStyle.emptyCartContainer}>
              <Typography sx={{ fontWeight: 'bold', fontSize: 20, marginBottom: 5 }}>Completed Items</Typography>

              {completedItem.map((x) => {
                return (
                  <>
                    {x.checked ? <>
                      <Box sx={ShoppingListStyle.completedCartContainer}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 500, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', padding: 2, borderRadius: 2 }}>
                          <del style={{ 'color': '#FF7F50' }}  >
                            <Typography sx={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}> {x.productName}</Typography></del>
                          <Button sx={{
                            backgroundColor: 'WhiteSmoke',
                            color: '#626D75',
                            borderRadius: '10px',
                            divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                            '&:hover': {
                              backgroundColor: 'lightGray',
                              color: '#FF7F50',
                            },

                          }} onClick={() => handleUndo(x)}><Typography sx={{ fontWeight: 'bold', fontSize: 20, }}>Undo</Typography></Button>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 175, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', padding: 3.1, borderRadius: 2, marginLeft: 5 }}>
                          Current Qty:
                          <Typography sx={{ fontWeight: 'bold', }}>{x.qty}</Typography>
                        </Box>
                      </Box>
                    </> : <></>}
                  </>
                )
              })}
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button sx={{
                  backgroundColor: 'white',
                  color: '#FF7F50',
                  borderRadius: '10px',
                  divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                  }, marginTop: 10,
                  maxWidth: 360,
                }} onClick={handleClearAll}>Clear All</Button>
              </Box>
            </Box>

          </Box>
        </>) : (<></>)}
      </Dialog>
    </div >
  );
}
