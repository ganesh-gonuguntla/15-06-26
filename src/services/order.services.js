const orders = require('../modules/order.modules');
const users = require('../modules/user.modules');
const products = require('../modules/product.modules');

function createOrder(orderData){
    const { productId, userId, quantity } = orderData;

    // Check if the product exists
    const product = products.find(product => Number(product.productId) === Number(productId));
    if(!product){
        console.log(`Product with id ${productId} not found`);
        return null;
    }

    //deccrease the stock of the product
    if(product.stock < quantity){
        console.log(`Insufficient stock for product with id ${productId}`);
        return null;
    }
    product.stock -= quantity;

    // Create the order
    const newOrderId = orders.length + 1;
    const newOrder = {
        orderId: newOrderId,
        productId,
        userId,
        quantity,
        timestamp: new Date().toISOString()
    };
    orders.push(newOrder);
    return newOrder;
}

function getAllOrders(){
    return orders;
}

function getOrderById(orderId){
    const order = orders.find(order => Number(order.orderId) === Number(orderId));
    if(!order){
        console.log(`Order with id ${orderId} not found`);
    }
    return order;
}

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById
}