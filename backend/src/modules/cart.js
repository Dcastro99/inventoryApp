const CartModel = require('../models/cart');



async function getAllCartProducts(req, res, next) {
  console.log('getting all products')
  try {
    const allCartProducts = await CartModel.find({});
    res.status(200).send(allCartProducts);
  } catch (err) {
    console.error(err);
    next(err);
  }
}

async function addToCart(req, res, next) {
  console.log('adding product to cart', req.body)
  try {
    
    const newProduct = await CartModel.create({

      productName: req.body.productName,
      category: req.body.category,
      uom: req.body.uom,
      qty: req.body.qty,
      checked: req.body.checked,
      cartID: req.body.newID,
      clearAll: req.body.clearAll,
      prevQty: req.body.prevQty,
      id: req.body.id
    })
    res.status(200).send( newProduct)
    console.log('added product!', newProduct);
    // } else {
    //   res.status(200).send('Product already exists!!');
    // }
  } catch (e) {
    res.status(500).send('server error');
  }
}


const deleteCartProduct = async (req, res) => {
  console.log('deleting product from cart!', req.params)
  try {
    const { id } = req.params;
    const deleted = await CartModel.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Product deleted");
    }
    throw new Error("Product not found");
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = { addToCart,getAllCartProducts,deleteCartProduct };