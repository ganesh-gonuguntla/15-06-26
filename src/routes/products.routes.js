const productHandler = require('../handlers/product.handlers');
const express = require('express');
const router = express.Router();

router.post('/', productHandler.createProduct);
router.get('/', productHandler.getAllProducts);
router.get('/:productId', productHandler.getProductById);

module.exports = router;