const productServices = require('../services/product.services');

function createProduct(req, res){
    const productData = req.body;
    const newProduct = productServices.createProduct(productData);
    res.status(201).json(newProduct);
}

function getAllProducts(req, res){
    const products = productServices.getAllProducts();
    res.status(200).json(products);
}

function getProductById(req, res){
    const productId = req.params.productId;
    const product = productServices.getProductById(productId);
    if(product){
        res.status(200).json(product);
    }
    else {
        res.status(404).json({ message: `Product with id ${productId} not found` });
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById
}