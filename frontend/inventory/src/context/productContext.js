import { createContext, useState } from 'react';


const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  // const [newQTY, setNewQTY] = useState(0);

  //----------AD PRODUCT----------//

  const addProduct = (productName, uom, qty, id) => {
    // console.log('add me sucka!!', productName, uom, qty, id)
    let item = products.find((item) => item.productName === productName);
    if (item) { // if item exists, update qty
      let sum = parseInt(item.qty) + parseInt(qty)
      item.qty = sum;
      // item.prevQty = item.qty;
      item.productName = productName;
      item.uom = uom;
      item.id = id;

      setProducts([...products]);
    }
    else {

      setProducts((prevState) => [...prevState, { productName, uom, qty, id }]);
    }
  }

  //----------decrement PRODUCT----------//

  const decrementProduct = (productName, uom, qty, id, newQty) => {
    // console.log('decrement', productName, uom, qty, id, newQty)
    let item = products.find((item) => item.productName === productName);
    if (item) { // if item exists, update qty
      item.qty = qty;
      // item.prevQty = prevQty;
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
      // item.prevQty = prevQty;
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

  //----------AD PRODUCT----------//

  const addCartProduct = (productName, uom, qty, id) => {
    // console.log('cart add me sucka!!', productName, uom, qty, id)
    let item = products.find((item) => item.productName === productName);
    if (item) { // if item exists, update qty
      // console.log('HIT!!!')
      item.qty = qty;
      // item.prevQty = prevQty;
      item.productName = productName;
      item.uom = uom;
      item.id = id;

      setProducts([...products]);
    }
    else {

      setProducts((prevState) => [...prevState, { productName, uom, id }]);
    }
  }





  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, decrementProduct, addCartProduct }}>
      {children}
    </ProductContext.Provider>
  )
}


export default ProductContext;