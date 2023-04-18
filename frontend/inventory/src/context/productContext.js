import { createContext, useState } from 'react';


const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState([]);
  const [category, setCategory] = useState('all');
  console.log('products', products);
  console.log('productSelected', productSelected);
  console.log('category!!', category);
  //--------------CATEGORY-----------------//

  const selectCategory = (categoryName) => {
    console.log('categoryName', categoryName);
    setCategory(categoryName);
    if (categoryName === 'all') {
      setProductSelected(products);
    } else setProductSelected(products.filter((item) => item.category === categoryName));


  }


  //----------ADD PRODUCT----------//

  const addProduct = (productName, category, uom, qty, id) => {
    console.log('before adding to cart', productName, category, uom, qty, id)
    let item = products.find((item) => item.productName === productName);
    if (item) { // if item exists, update qty
      let sum = parseInt(item.qty) + parseInt(qty)
      item.qty = sum;
      item.category = category;
      item.productName = productName;
      item.uom = uom;
      item.id = id;
      setProducts([...products]);
    }
    else {
      setProducts((prevState) => [...prevState, { productName, category, uom, qty, id }]);
      setProductSelected((prevState) => [...prevState, { productName, category, uom, qty, id }]);
    }
  }

  //----------decrement PRODUCT----------//

  const decrementProduct = (productName, uom, qty, id, newQty) => {
    let item = products.find((item) => item.productName === productName);
    if (item) { // if item exists, update qty
      item.qty = qty;
      item.productName = productName;
      item.uom = uom;
      item.id = id;
      setProducts([...products]);
    }
    else {
      setProducts((prevState) => [...prevState, { productName, uom, qty, id }]);
    }
  }

  //----------UPDATE PRODUCT----------//

  const updateProduct = (productName, uom, qty, id, timeStamp) => {
    let item = products.find((item) => item.id === id);
    if (item) { // if item exists, update qty
      item.qty = qty;
      item.productName = productName;
      item.uom = uom;
      item.id = id;
      item.timeStamp = timeStamp;
      setProducts([...products]);
    }
    else {
      setProducts((prevState) => [...prevState, { productName, uom, qty, id, timeStamp }]);
    }
  }

  //----------DELETE PRODUCT----------//

  const deleteProduct = (id) => {
    setProducts(products.filter((x) => x.id !== id));
  }


  //----------ADD PRODUCT----------//

  const addCartProduct = (productName, uom, qty, id) => {
    let item = products.find((item) => item.productName === productName);
    if (item) { // if item exists, update qty
      item.qty = qty;
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
    <ProductContext.Provider value={{ products, productSelected, addProduct, updateProduct, deleteProduct, decrementProduct, addCartProduct, selectCategory }}>
      {children}
    </ProductContext.Provider>
  )
}


export default ProductContext;