const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common')
const AppError = require('../utils/errors/app-error');

async function validateFetchRequest(req, res, next) {
    const category = req.query.category;
    if (category === '' || category === undefined) {
        ErrorResponse.message = 'Something went wrong while fetching menu-items resources';
        ErrorResponse.error = new AppError('Category not found in the incoming request', StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    next();
}

async function validatePostRequest(req, res, next) {
    if (!req.body) {
        ErrorResponse.message = 'Something went wrong while creating menu-item resources';
        ErrorResponse.error = new AppError('Request body not found in the incoming request', StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.name) {
        ErrorResponse.message = 'Something went wrong while creating menu-item resources';
        ErrorResponse.error = new AppError('Menu-item name not found in the incoming request', StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.imageURL) {
        ErrorResponse.message = 'Something went wrong while creating menu-item resources';
        ErrorResponse.error = new AppError('Menu-item image not found in the incoming request', StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.category) {
        ErrorResponse.message = 'Something went wrong while creating menu-item resources';
        ErrorResponse.error = new AppError('Menu-item category not found in the incoming request', StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.price) {
        ErrorResponse.message = 'Something went wrong while creating menu-item resources';
        ErrorResponse.error = new AppError('Menu-item price not found in the incoming request', StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.rating) {
        ErrorResponse.message = 'Something went wrong while creating menu-item resources';
        ErrorResponse.error = new AppError('Menu-item rating not found in the incoming request', StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateFetchRequest,
    validatePostRequest
}