const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

const { OrderService } = require('../services');

async function createOrder(req, res) {
    try {
        const response = await OrderService.createOrder({
            userId: req.body.userId,
            items: req.body.items,
            totalPrice: req.body.totalPrice
        });

        SuccessResponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;

        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function fetchAllOrders(req, res) {
    try {
        const response = await OrderService.fetchAllOrders({
            userId: req.params.userId
        });

        SuccessResponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;

        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createOrder,
    fetchAllOrders
}