const productModel = require('../models/product.schema');
const httpStatus = require('http-status');

// create Product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = new productModel({
      name,
      price,
      description,
    });
    const product = await newProduct.save();
    res.status(httpStatus.CREATED).send(product);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Some error occurred while creating the product.",
    });
  }
}

// Get all products
exports.getAll = async (_req, res) => {
  try{
    const products = await productsModel.find();
    res.status(httpStatus.OK).send(products);
  } catch(error){
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Some error occurred while retrieving products."
    })
  }
};

// Get product by id
exports.getById = async (req, res) => {
  try{
    const { id } = req.params;
    const product = await productsModel.findById(id);
    res.status(httpStatus.OK).send(product);
  } catch(error){
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Some error occurred while retrieving products."
    })
  }
}

// Update product by id
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, price, description, image } = req.body;
    const item = await Item.findByIdAndUpdate(id, {
      name,
      type,
      price,
      description,
      image,
    }, { new: true });
    
    if (!item) {
      res.status(HttpStatus.NOT_FOUND).json({ message: "Item not found." });
    } 
    res.status(httpStatus.OK).json("Item updated!");
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
}

// Delete product by id
exports.deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByIdAndDelete(id);
    
    if (!item) {
      res.status(HttpStatus.NOT_FOUND).json({ message: "Item not found." });
    } 
  
    res.status(httpStatus.OK).json("Item deleted!");
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
}
