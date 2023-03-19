import { createContext, useState } from 'react';


const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  console.log('products------->', products)
  const addProduct = (productName, uom, qty, id, checked) => {
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
      item.checked = checked;
      setProducts([...products]);
    }
    else {

      setProducts((prevState) => [...prevState, { productName, uom, qty, id, checked }]);
    }
  }

  const updateProduct = (productName, uom, qty, id, checked) => {
    let item = products.find((item) => item.id === id);
    // console.log('item>>>>>>>>>>', item)
    if (item) { // if item exists, update qty

      item.qty = qty;
      item.productName = productName;
      item.uom = uom;
      item.id = id;
      item.checked = checked;
      setProducts([...products]);
    }
    else {
      setProducts((prevState) => [...prevState, { productName, uom, qty, id, checked }]);
    }
  }

  const deleteProduct = (id) => {
    setProducts(products.filter((x) => x.id !== id));
  }



  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  )
}


export default ProductContext;