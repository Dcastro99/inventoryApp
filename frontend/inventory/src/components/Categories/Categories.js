import React, { useState, useContext } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import { categoryTabs } from './CategoryTabs';
import ProductContext from '../../context/productContext';

const styles = {
  title: {
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'LightSlateGray',
    color: 'white',
    width: '100%',
    padding: '10px'
  }
}



function Categories() {
  const [currentTabs, setCurrentTabs] = useState('all');
  const { selectCategory } = useContext(ProductContext);

  const handleCategoryPicked = (e, value) => {
    console.log('What is Value??', value);
    setCurrentTabs(value);
    selectCategory(value);
    // dispatch(productSlice.actions.selectCategory(value));

  }

  return (
    <Box sx={{ width: '90%' }} >
      <Typography sx={styles.title} variant="h5">Categories</Typography>
      <Tabs textColor="inherit" TabIndicatorProps={{ style: { backgroundColor: 'salmon' } }} sx={{
        "& button:focus": { color: "salmon" },
        "& button:active": { color: "black" }
      }} value={currentTabs} onChange={handleCategoryPicked}>

        {categoryTabs.map((data, key) => (
          <Tab sx={{ color: 'rgb(60, 201, 226)' }} key={key} label={data.title} value={data.value} />
        ))}
      </Tabs>
    </Box >
  )
}

export default Categories
