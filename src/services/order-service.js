const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
const { OrderRepository } = require('../repository');
const { User } = require('../models');

const orderRepository = new OrderRepository();

async function createOrder(data) {
    try {
        const user = await User.findByPk(data.userId);
        if (!user) {
            throw new AppError('Requested user is not logged in to place order', StatusCodes.NOT_FOUND)
        }

        const order = await orderRepository.create(data);
        return order;
    } catch (error) {
        if (error.name === "SequelizeValidationError" || error.name === "SequelizeUniqueConstraintError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }

        throw new AppError("Cannot create a new User object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function fetchAllOrders(data) {
    try {
        const allOrders = await orderRepository.getAll(data);
        return allOrders;
    } catch (error) {
        throw new AppError("Cannot create a new User object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createOrder,
    fetchAllOrders
}