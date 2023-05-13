import { createContext, useState, useEffect } from 'react';
import axios from 'axios';


const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState([]);
  const [category, setCategory] = useState('all');
  console.log('products->', products);
  console.log('productSelected->', productSelected);
  console.log('category->!!', category);

  //--------------------CRUD------------------------//

  //--------------GET ALL PRODUCTS-----------------//
  const handleGetAllProducts = async () => {
    const config = {
      method: 'GET',
      baseURL: process.env.REACT_APP_VERCEL_URL,
      url: '/'
    }
    const response = await axios(config);
    console.log('RESPONSE', response);
    setProducts(response.data);
    setProductSelected(response.data);
  }

  //--------------DELETE PRODUCT-----------------//
  const handleDeleteProduct = async (id) => {
    const config = {
      method: 'DELETE',
      baseURL: process.env.REACT_APP_VERCEL_URL,
      url: `/products/${id}`
    }
    await axios(config);
    // console.log('RESPONSE', response);
  }

  const handleUpdateProduct = async (id, data) => {
    const config = {
      method: 'PUT',
      baseURL: process.env.REACT_APP_VERCEL_URL,
      url: `/product/${id}`,
      data: data
    }
    const response = await axios(config);

    console.log('RESPONSE', response);
  }










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
    console.log('updateProduct->', productName, uom, qty, id, timeStamp)
    let item = products.find((item) => item._id === id);
    if (item) { // if item exists, update qty
      item.qty = qty;
      item.productName = productName;
      item.uom = uom;
      item._id = id;
      item.timeStamp = timeStamp;
      setProducts([...products]);
    }
    else {
      setProducts((prevState) => [...prevState, { productName, uom, qty, id, timeStamp }]);
    }
  }

  //----------DELETE PRODUCT----------//

  const deleteProduct = (id) => {
    setProducts(products.filter((x) => x._id !== id));
    setProductSelected(products.filter((x) => x._id !== id));
    // setProductSelected(products.filter((item) => item.category === id.category));
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
    <ProductContext.Provider
      value={{
        products,
        productSelected,
        addProduct,
        updateProduct,
        deleteProduct,
        decrementProduct,
        addCartProduct,
        selectCategory,
        handleGetAllProducts,
        handleDeleteProduct,
        handleUpdateProduct
      }}>
      {children}
    </ProductContext.Provider>
  )
}


export default ProductContext;