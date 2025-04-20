const express = require('express');

const { OrderMidllewares } = require('../../middlewares');
const { OrderControllers } = require('../../controllers');

const router = express.Router();

/**
 * POST: /api/v1/orders
 * body={
 *   id :"userId"
 *   items: "json"
 *   totalprice: 120
 * }
 */
router.post('/',
    OrderMidllewares.validateOrderRequest,
    OrderControllers.createOrder);

module.exports = router;