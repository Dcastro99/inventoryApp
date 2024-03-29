import { Box } from '@mui/material';
import HomePage from './pages/HomePage';
import { ProductProvider } from './context/productContext';

//  
function App() {


  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
    }}>
      <ProductProvider>
        <HomePage />
      </ProductProvider >
    </Box>
  );
}

export default App;
