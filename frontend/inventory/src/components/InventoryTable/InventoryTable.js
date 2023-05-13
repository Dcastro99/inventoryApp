import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button } from '@mui/material';
import ProductContext from '../../context/productContext';
import EditModal from '../EditModal/EditModal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Options from '../Options/Options';
import { TableStyle } from '../../assets/style/TableStyle';
import '../../assets/style/Table.css'


export default function BasicTable({ addToCart, handleAlert }) {
  const { productSelected } = useContext(ProductContext);
  const [newProducts, setNewProducts] = useState([]);
  const { deleteProduct } = useContext(ProductContext);
  const { handleGetAllProducts, handleDeleteProduct } = useContext(ProductContext);

  const [pageNumber, setPageNumber] = useState(0);
  const resultsPage = 3
  const pagesVisited = pageNumber * resultsPage
  console.log('product selected', productSelected)
  console.log('new products', newProducts)




  useEffect(() => {
    handleGetAllProducts();
  }, [])



  useEffect(() => {

    setNewProducts(productSelected)
    // setNewProducts([...newProducts, allProducts])

  }, [productSelected])

  // useEffect(() => {
  //   const smear = [...newProducts, ...allProducts]
  //   setNewProducts(smear)
  // }, [allProducts])




  const deleteItem = (item) => {
    console.log('item to be deleted', item)
    let itemToBeDelted = item._id;
    deleteProduct(itemToBeDelted);
    handleDeleteProduct(itemToBeDelted);

  }
  const displayResults = newProducts.slice(pagesVisited, pagesVisited + resultsPage).map(item => {
    return (
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
    )


  })

  const pageCount = Math.ceil(newProducts.length / resultsPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }


  return (

    <Box sx={TableStyle.mainContainer}>
      {/* {newProducts.length > 0 ? ( */}
      {newProducts.length === 0 ? (
        <Box sx={TableStyle.emptyPantry}>Nothing in your Pantry!</Box>
      ) : (


        <TableContainer component={Paper} >

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
              {displayResults}
            </TableBody>

          </Table>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 6 }}>
            <ReactPaginate

              previousLabel={'Previous'}
              nextLabel={'Next'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'paginationBttns'}
              previousLinkClassName={'previousBttn'}
              nextLinkClassName={'nextBttn'}
              disabledClassName={'paginationDisabled'}
              activeClassName={'paginationActive'}
            />
          </Box>
        </TableContainer>
      )}



      {/* ) */}

      {/* : (<Box sx={TableStyle.emptyPantry}>Nothing in your Pantry!</Box>)} */}
    </Box>




  )
}





