const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

const { MenuItemService } = require('../services');

async function fetchByCategory(req, res) {
    try {
        const response = await MenuItemService.fetchByCategory(req.query.fetchByCategory);

        SuccessResponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message;

        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function createMenuItem(req, res) {
    try {
        const response = await MenuItemService.createMenuItem({
            name: req.body.name,
            imageURL: req.body.imageURL,
            category: req.body.category,
            price: req.body.price,
            rating: req.body.rating,
            description: req.body.description
        });

        SuccessResponse.data = response;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;

        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function fetchItem(req, res) {
    try {
        const response = await MenuItemService.fetchItem(req.params.id);

        SuccessResponse.data = response;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;

        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}
module.exports = {
    fetchByCategory,
    fetchItem,
    createMenuItem
}