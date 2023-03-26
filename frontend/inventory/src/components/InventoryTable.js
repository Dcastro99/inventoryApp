import React, { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button } from '@mui/material';
import ProductContext from '../context/productContext';
import EditModal from './EditModal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Options from './Options';


export default function BasicTable({ addToCart, handleAlert }) {
  const { products } = useContext(ProductContext);
  const [newProducts, setNewProducts] = useState('');
  const { deleteProduct } = useContext(ProductContext);
  // console.log('WHat are you', products);

  useEffect(() => {
    setNewProducts(products)
  }, [products])

  const deleteItem = (item) => {
    let itemToBeDelted = item.id;
    deleteProduct(itemToBeDelted);

  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 10 }}>
      {newProducts.length > 0 ? (
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="center">Unit of Measure</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>

              </TableRow>
            </TableHead>
            {newProducts.map(item => (
              <TableBody >

                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.productName}
                  </TableCell>
                  <TableCell align="center">{item.uom}</TableCell>
                  <TableCell align="right" sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', marginRight: 2, marginTop: 1 }}>{item.qty}</TableCell>
                  <TableCell align="center">

                    <div>
                      <EditModal item={item} />
                    </div>
                    {/* </Button> */}
                  </TableCell>
                  <TableCell align="left">
                    <Button sx={{
                      backgroundColor: '#B8B8B8',
                      color: 'Tomato',
                      borderRadius: '10px',
                      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                      '&:hover': {
                        backgroundColor: 'white',
                        color: 'Tomato',
                        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                      },
                    }} onClick={() => { deleteItem(item) }}> <DeleteForeverIcon /></Button>

                  </TableCell>
                  <TableCell>
                    <div>
                      <Options item={item} addToCart={addToCart} handleAlert={handleAlert} />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </TableContainer>)
        : (<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'LightSlateGray', color: 'white', fontSize: 30, marginTop: 5, width: 400, height: 200, borderRadius: 2 }}>Nothing in your Pantry!</Box>)}
    </Box>
  );
}