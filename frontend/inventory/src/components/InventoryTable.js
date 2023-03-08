import React, { useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button } from '@mui/material';
import ProductContext from '../context/productContext';
import EditModal from './EditModal';


export default function BasicTable() {
  const { products } = useContext(ProductContext);
  console.log('WHat are you', products);

  // const editItem = (item) => {
  //   console.log('editItem', item);
  //   <EditModal item={item} />
  // }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 10 }}>
      {products.length > 0 ? (
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="center">Unit of Measure</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="center">Edit</TableCell>

              </TableRow>
            </TableHead>
            {products.map(row => (
              <TableBody >

                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {console.log('PRODUCT', row)}
                  <TableCell component="th" scope="row">
                    {row.productName}
                  </TableCell>
                  <TableCell align="center">{row.uom}</TableCell>
                  <TableCell align="right" sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', marginRight: 2 }}>{row.qty}</TableCell>
                  <TableCell align="center">
                    {console.log('PRODUCT', row)}
                    {/* <Button onClick={() => { editItem(row) }} > */}
                    <EditModal item={row} />
                    {/* </Button> */}
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </TableContainer>)
        : (<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'LightSlateGray', color: 'white', fontSize: 30, marginTop: 5, width: 400, height: 200 }}>Nothing in your Pantry!</Box>)}
    </Box>
  );
}