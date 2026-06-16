const products = require('../models/product.modules');
const users = require('../models/user.modules');
const orders = require('../models/order.modules');

function addProduct(productData){
    const newProductId = products.length + 1;
    const newProduct = {
        productId: newProductId,
        ...productData
    };
    products.push(newProduct);
    return newProduct;
}

function getAllProducts(){
    return products;
}

function getProductById(productId){
    const product = products.find(product => Number(product.productId) === Number(productId));
    if(!product){
        console.log(`Product with id ${productId} not found`);
    }
    return product;
}

function updateProductById(productId, productData){
    const productIndex = products.findIndex(product => Number(product.productId) === Number(productId));    
    if(productIndex !== -1){
        products[productIndex] = { ...products[productIndex], ...productData };
        return products[productIndex];
    }
    console.log(`Product with id ${productId} not found`);
    return null;
}

module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    updateProductById
};