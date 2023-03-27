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

export default function ShoppingList({ cartItems, clearCart, updateCart, decrementCart }) {
  const [newItem, setNewItem] = useState('');
  const [open, setOpen] = useState(false);
  const [newQty, setNewQty] = useState(0);
  const { updateProduct, products } = useContext(ProductContext);
  // let completedItem = [];
  const [completedItem, setCompletedItem] = useState([]);
  // let decrementSum;
  // let deleteAll;
  console.log('completedItem', completedItem)
  console.log('newItem in Cart', newItem)
  console.log('products in inventory', products)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteHandler = (cartItem) => {
    setNewItem(newItem.filter((x) => x.newId !== cartItem.newId))
  }

  const handleQty = (e) => {
    e.preventDefault();
    setNewQty(e.target.value)
  }

  const handleCheck = (item) => {
    const items = newItem.map(x => {
      if (x.newId === item.newId) {
        x.checked = !x.checked

        if (x.checked) {
          let sum = parseInt(x.qty) + parseInt(newQty);
          // decrementSum = parseInt(x.qty) - parseInt(x.prevQty);
          console.log('x.prevQty', x.prevQty)
          console.log('newQty', newQty)
          console.log('Newqty+', sum)
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
            setCompletedItem([...completedItem, x])
          }

        } else if (
          !x.checked
        ) {
          let sum = parseInt(x.qty) - parseInt(x.prevQty);
          console.log('x.prevQty', x.prevQty)
          console.log('newQty', newQty)
          console.log('Newqty+', sum)
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
    newItem.map((x) => {
      if (x.checked === true) {

        setNewItem([])
        setCompletedItem([])
      }
      else {
        setCompletedItem([])
      }
      return x;
    })
    // ) : (setCompletedItem([]))
    //     if (x.id === product.id) {


    //       decrementCart(
    //         x.productName,
    //         x.uom,
    //         x.prevQty = decrementSum,
    //         x.qty = decrementSum,
    //         x.id,
    //         x.newId,
    //         x.checked
    //       )

    //       updateProduct(
    //         x.productName,
    //         x.uom,
    //         x.qty = decrementSum,
    //         x.id,
    //       );

    //     }
    //     return x;
    //   })


    // });


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
                {item.checked === false ? (
                  < Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 1 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 500, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', padding: 2, borderRadius: 2 }}>
                      {/* {console.log('item.checked', item.checked)} */}
                      {item.checked === true ? (<Typography sx={{ fontWeight: 'bold', fontSize: 20, }}><del>{item.productName}</del></Typography>) : (<Typography sx={{ fontWeight: 'bold', fontSize: 20, }}>{item.productName}</Typography>)}

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
                      </div>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 175, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', padding: 4, borderRadius: 2, marginLeft: 5 }}>
                      Current Qty:
                      <Typography sx={{ fontWeight: 'bold', }}>{item.qty}</Typography>
                    </Box>
                  </Box>) : (<> </>)
                }

              </>
            )
          })
          }
        </>) : (<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}><Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px', maxWidth: 360, fontSize: 20, fontWeight: 'bold', padding: 5, borderRadius: 5, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', backgroundColor: 'whitesmoke' }}>Your shopping list is empty</Typography></Box>)}
        {completedItem.length > 0 ? (<>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 10, padding: 5, borderRadius: 5, width: 800, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: 20, marginBottom: 5 }}>Completed Items</Typography>


              {completedItem.map((x) => {
                console.log('x.productName', x.productName)
                return (<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 1, width: '50%' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 500, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', padding: 2, borderRadius: 2 }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: 20, }}>{x.productName}</Typography>
                    <Button sx={{
                      backgroundColor: 'WhiteSmoke',
                      color: '#626D75',
                      borderRadius: '10px',
                      divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                      '&:hover': {
                        backgroundColor: 'lightGray',
                        color: '#FF7F50',
                      },
                    }}><Typography sx={{ fontWeight: 'bold', fontSize: 20, }}>Undo</Typography></Button>
                  </Box>
                </Box>)
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
