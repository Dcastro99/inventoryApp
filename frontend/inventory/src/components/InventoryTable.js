import React, { useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ProductContext from '../context/productContext';


// function createData(productName, uom, qty) {
//   return { productName, uom, qty };
// }



// const rows = [
//   createData('Tomatoe Sauce', 'can', 2),
//   createData('Rice', 'bag', 1),
//   createData('Chicken Broth', 'can', 3),
// ];

export default function BasicTable() {
  const { products } = useContext(ProductContext);
  console.log('WHat are you', products);
  // let [item] = products;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name (100g serving)</TableCell>
            <TableCell align="right">Unit of Measure</TableCell>
            <TableCell align="right">Quantity</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.length > 0 ? (products.map((row) => (

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
          ))) : (<>nothing here</>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}