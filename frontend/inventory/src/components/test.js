import { useState } from 'react';
import { Typography, TextField, InputLabel } from '@mui/material';


function ProductForm() {
  const [productName, setProductName] = useState('');

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  return (
    <>
      <Typography variant='h5' >Product</Typography>
      <TextField label='Product Name' name='product_name' value={productName} onChange={handleProductNameChange} fullWidth />
      <Typography variant='h5' >Unit of Measure</Typography>
      <InputLabel id="demo-simple-select-helper-label">Unit of Measure</InputLabel>
      {/* Other form components */}
    </>
  );
}
