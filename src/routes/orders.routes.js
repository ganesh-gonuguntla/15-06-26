const orderHandler = require('../handlers/order.handlers');
const express = require('express');
const router = express.Router();

router.post('/', orderHandler.createOrder);
router.get('/', orderHandler.getAllOrders);
router.get('/:orderId', orderHandler.getOrderById);

module.exports = router;

