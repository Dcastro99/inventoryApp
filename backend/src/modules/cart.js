const CartModel = require('../models/cart');

async function addToCart(req, res, next) {
  console.log('adding product to cart', req.body)
  try {
    // const checkProduct = await CartModel.findOne({ productName: req.body.productName });
    // console.log('checkProduct', checkProduct)
    // if (!checkProduct) {
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
    res.status(200).send('Product created!', newProduct)
    console.log('added product!', newProduct);
    // } else {
    //   res.status(200).send('Product already exists!!');
    // }
  } catch (e) {
    res.status(500).send('server error');
  }
}

module.exports = { addToCart };