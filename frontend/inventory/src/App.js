import { Box } from '@mui/material';
import HomePage from './pages/HomePage';
import { ProductProvider } from './context/productContext';
//  
function App() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw' }}>
      <ProductProvider>
        <HomePage />
      </ProductProvider >
    </Box>
  );
}

export default App;
