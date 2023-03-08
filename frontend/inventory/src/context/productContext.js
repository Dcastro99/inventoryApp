import { createContext, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const addProduct = (productName, uom, qty) => {
    let item = products.find((item) => item.productName === productName);
    if (item) { // if item exists, update qty
      let newQty = item.qty;
      let num2 = parseInt(qty);
      let num1 = parseInt(newQty);
      item.qty = num1 + num2;
      item.productName = productName;
      item.uom = uom;
      setProducts([...products]);
    }
    else {

      setProducts((prevState) => [...prevState, { productName, uom, qty }]);
    }
  }

  // const deleteProduct = (productName, uom, qty) => {
  //   let item = products.find((item) => item.productName === productName);
  //   if (item) { // if item exists, update qty
  //     let newQty = item.qty;
  //     let num2 = parseInt(qty);
  //     let num1 = parseInt(newQty);
  //     item.qty = num1 - num2;
  //     item.productName = productName;
  //     item.uom = uom;
  //     setProducts([...products]);
  //   }
  //   else {

  //     setProducts((prevState) => [...prevState, { productName, uom, qty }]);
  //   }
  // }

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  )
}


export default ProductContext;