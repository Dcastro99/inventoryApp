import React, { useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import ProductContext from '../context/productContext';


export default function BasicTable() {
  const { products } = useContext(ProductContext);
  console.log('WHat are you', products);

  return (
    <>
      {products.length > 0 ? (products.map((row) => (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Unit of Measure</TableCell>
                <TableCell align="right">Quantity</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>

              <TableRow
                // key={products.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {console.log('ROW', row)}
                <TableCell component="th" scope="row">
                  {row.productName}
                </TableCell>
                <TableCell align="right">{row.uom}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ))) : (<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey', color: 'white', fontSize: 30, marginTop: 5, width: 400, height: 200 }}>Nothing in your Pantry!</Box>)
      }
    </>
  );
}