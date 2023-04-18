import React, { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Card, Typography, Divider } from '@mui/material';
import ProductContext from '../../context/productContext';
import EditModal from '../EditModal/EditModal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Options from '../Options/Options';
import { TableStyle } from '../../assets/style/TableStyle';


export default function BasicTable({ addToCart, handleAlert }) {
  const { productSelected } = useContext(ProductContext);
  const [newProducts, setNewProducts] = useState('');
  const { deleteProduct } = useContext(ProductContext);
  // console.log('WHat are you', products);

  useEffect(() => {
    setNewProducts(productSelected)
  }, [productSelected])

  const deleteItem = (item) => {
    let itemToBeDelted = item.id;
    deleteProduct(itemToBeDelted);

  }

  return (
    <Box sx={TableStyle.mainContainer}>
      {newProducts.length > 0 ? (
        <TableContainer component={Paper} sx={{}}>
          <Table aria-label="simple table" sx={{ minWidth: 200 }}>
            <TableHead >
              <TableRow sx={{ backgroundColor: '	#F0F0F0' }}>
                <TableCell sx={TableStyle.tableCell}>Product Name</TableCell>
                <TableCell sx={TableStyle.tableCell} align="center">Unit of Measure</TableCell>
                <TableCell sx={TableStyle.tableCell} align="right">Quantity</TableCell>
                <TableCell sx={TableStyle.tableCell} align="center"></TableCell>
                <TableCell sx={TableStyle.tableCell} align="center"></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>


            <TableBody>
              {newProducts.map(item => (

                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0, } }}
                >
                  <TableCell sx={{}} align='center' size='small' component="th" scope="row">
                    {item.productName}
                  </TableCell>
                  <TableCell sx={TableStyle.tableCell} align="center" size='small'>{item.uom}</TableCell>
                  <TableCell sx={TableStyle.tableCell} align="center" >{item.qty}</TableCell>
                  <TableCell sx={TableStyle.tableCell} align="center">

                    <div>
                      <EditModal item={item} />
                    </div>
                    {/* </Button> */}
                  </TableCell>
                  <TableCell sx={TableStyle.tableCell} align="left">
                    <Button sx={TableStyle.deleteButton} onClick={() => { deleteItem(item) }}> <DeleteForeverIcon /></Button>

                  </TableCell>
                  <TableCell sx={TableStyle.tableCell}>
                    <div>
                      <Options item={item} addToCart={addToCart} handleAlert={handleAlert} />
                    </div>
                  </TableCell>


                </TableRow>

              ))}
            </TableBody>

          </Table>

        </TableContainer>)
        : (<Box sx={TableStyle.emptyPantry}>Nothing in your Pantry!</Box>)}
    </Box>
    // <Box>
    //   {newProducts.length > 0 ? (
    //     <>
    //       {newProducts.map(item => (
    //         <Card sx={{
    //           margin: '20px',
    //           padding: '20px', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    //           // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
    //           boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
    //         }}>
    //           <Box>
    //             <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>Product Name</Typography>
    //             <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{item.productName}</Typography>
    //             <Divider light />
    //             <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>Quantatiy</Typography>
    //             <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{item.qty}</Typography>
    //             <Divider light />

    //           </Box>
    //         </Card>
    //       ))}
    //     </>
    //   ) : (<Box sx={TableStyle.emptyPantry}>Nothing in your Pantry!</Box>)}
    // </Box>


  );
}