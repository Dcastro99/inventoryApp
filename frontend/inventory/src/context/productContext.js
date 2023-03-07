import { createContext, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const addProduct = (productName, uom, qty) => {
    setProducts((prevState) => [...prevState, { productName, uom, qty }]);
  }
  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  )
}


export default ProductContext;