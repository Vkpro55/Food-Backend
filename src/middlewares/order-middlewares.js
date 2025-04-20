const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common')
const AppError = require('../utils/errors/app-error');

async function validateOrderRequest(req, res, next) {
    console.log("Middleware")
    if (!req.body) {
        ErrorResponse.message = 'Something went wrong while placing an order';
        ErrorResponse.error = new AppError('Request body not found in the incoming request', StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.userId) {
        ErrorResponse.message = 'Something went wrong while placing an order';
        ErrorResponse.error = new AppError('User id not found in the incoming request', StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateOrderRequest
}