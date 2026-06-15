const orderServices = require('../services/order.services');

function createOrder(req, res){ 
    const orderData = req.body;
    const newOrder = orderServices.createOrder(orderData);
    if(newOrder){
        res.status(201).json(newOrder);
    } else {
        res.status(400).json({ message: 'Failed to create order' });
    }
}

function getAllOrders(req, res){
    const orders = orderServices.getAllOrders();
    res.status(200).json(orders);
}   

function getOrderById(req, res){
    const orderId = req.params.orderId;
    const order = orderServices.getOrderById(orderId);
    if(order){
        res.status(200).json(order);
    }
    else {        res.status(404).json({ message: `Order with id ${orderId} not found` });
    }
}

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById
}