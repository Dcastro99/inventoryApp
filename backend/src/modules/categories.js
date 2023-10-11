const CategoriesModel = require('../models/categories');



async function getAllCategories(req, res, next) {
  console.log('getting all products')
  try {
    const allCategories = await CategoriesModel.find({nuser: req.query.user});
    res.status(200).send(allCategories);
  } catch (err) {
    console.error(err);
    next(err);
  }
}

async function addCategory(req, res, next) {
  console.log('adding product to cart')
  try {
    
    const newCategory = await CategoriesModel.create({
      user: req.body.user,
    category: req.body.category,
    })
    res.status(200).send( newCategory)
    console.log('added product!', newCategory);
  
  } catch (e) {
    res.status(500).send('server error');
  }
}


const deleteCategory = async (req, res) => {
  console.log('deleting product from cart!')
  try {
    const { id } = req.params;
    const deletedCategory = await CategoriesModel.findByIdAndDelete(id);
    if (deleted) {
        print(deletedCategory);
      return res.status(200).send("Product deleted");
    }
    throw new Error("Product not found");
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = { getAllCategories,addCategory,deleteCategory };