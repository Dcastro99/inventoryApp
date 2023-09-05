const ProductsModel = require('../models/product');

async function getAllProducts(req, res, next) {
  console.log('getting all products')
  try {
    const allProducts = await ProductsModel.find({});
    res.status(200).send(allProducts);
  } catch (err) {
    console.error(err);
    next(err);
  }
}

async function addProduct(req, res, next) {
  console.log('adding product', req.body)
  try {
    const checkProduct = await ProductsModel.findOne({ productName: req.body.productName });
    if (!checkProduct) {
      const newProduct = await ProductsModel.create({
        ...req.body,
        user: req.body.user,
        productName: req.body.productName.toLowerCase(),
        category: req.body.category.toLowerCase(),
        uom: req.body.uom,
        qty: req.body.qty,
        checked: req.body.checked
      })
      res.status(200).send('Product created!')
      // console.log('user created!', newUser);
    } else {
      res.status(200).send('Product already exists!!');
    }
  } catch (e) {
    res.status(500).send('server error');
  }
}

async function updateProduct(req, res) {
  console.log('updating product', req.body)
  console.log('UPDATED!!::', req.params)
  try {
    const results = await ProductsModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        user: req.body.user,
        productName: req.body.productName,
        uom: req.body.uom,
        qty: req.body.qty,
        category: req.body.category,
      }
    );
    res.status(200).send(results);
  } catch (e) {
    next(e.message);

  }

}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ProductsModel.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Product deleted");
    }
    throw new Error("Product not found");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllProducts, addProduct, deleteProduct, updateProduct };