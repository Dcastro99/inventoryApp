import { createContext, useState } from 'react';


const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  //----------AD PRODUCT----------//

  const addProduct = (productName, uom, qty, id) => {
    // console.log('id', id)
    let item = products.find((item) => item.productName === productName);
    if (item) { // if item exists, update qty
      let newQty = item.qty;
      let num2 = parseInt(qty);
      let num1 = parseInt(newQty);
      item.qty = num1 + num2;
      item.productName = productName;
      item.uom = uom;
      item.id = id;
      // item.checked = checked;
      setProducts([...products]);
    }
    else {

      setProducts((prevState) => [...prevState, { productName, uom, qty, id }]);
    }
  }

  //----------decrement PRODUCT----------//

  const decrementProduct = (productName, uom, qty, id, newQty) => {
    console.log('decrement', productName, uom, qty, id, newQty)
    let item = products.find((item) => item.productName === productName);
    if (item) { // if item exists, update qty
      item.qty = qty - newQty;
      item.productName = productName;
      item.uom = uom;
      item.id = id;
      // item.checked = checked;
      setProducts([...products]);
    }
    else {
      setProducts((prevState) => [...prevState, { productName, uom, qty, id }]);
    }
  }

  //----------UPDATE PRODUCT----------//

  const updateProduct = (productName, uom, qty, id) => {
    let item = products.find((item) => item.id === id);
    if (item) { // if item exists, update qty
      item.qty = qty;
      item.productName = productName;
      item.uom = uom;
      item.id = id;
      // item.checked = checked;
      setProducts([...products]);
    }
    else {
      setProducts((prevState) => [...prevState, { productName, uom, qty, id }]);
    }
  }

  //----------DELETE PRODUCT----------//

  const deleteProduct = (id) => {
    setProducts(products.filter((x) => x.id !== id));
  }

  //----------RESET PRODUCT----------//

  const resetProduct = (productName, uom, qty, id) => {
    console.log('RESET------>', productName, uom, qty, id)
    let item = products.find((item) => item.productName === productName);
    if (item) { // if item exists, update qty
      item.productName = productName;
      item.uom = uom;
      item.id = id;
      // item.checked = false;
      setProducts([...products]);
    }
    else {
      setProducts((prevState) => [...prevState, { productName, uom, qty, id }]);
    }
    setProducts([]);
  }



  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, decrementProduct, resetProduct }}>
      {children}
    </ProductContext.Provider>
  )
}


export default ProductContext;