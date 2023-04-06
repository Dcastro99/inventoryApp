import React, { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button } from '@mui/material';
import ProductContext from '../context/productContext';
import EditModal from './EditModal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Options from './Options';
import { TableStyle } from '../style/TableStyle';


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
    <Box sx={TableStyle.mainContainer}>
      {newProducts.length > 0 ? (
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '	#F0F0F0' }}>
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
                  <TableCell align="center" >{item.qty}</TableCell>
                  <TableCell align="center">

                    <div>
                      <EditModal item={item} />
                    </div>
                    {/* </Button> */}
                  </TableCell>
                  <TableCell align="left">
                    <Button sx={TableStyle.deleteButton} onClick={() => { deleteItem(item) }}> <DeleteForeverIcon /></Button>

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
        : (<Box sx={TableStyle.emptyPantry}>Nothing in your Pantry!</Box>)}
    </Box>
  );
}