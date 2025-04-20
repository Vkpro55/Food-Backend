const { StatusCodes } = require('http-status-codes');
const { MenuItemRepository } = require('../repository');
const AppError = require('../utils/errors/app-error');

const menuItemRepo = new MenuItemRepository();

async function fetchByCategory(data) {
    try {
        const allItems = await menuItemRepo.getAll(data);

        if (allItems.length <= 0) {
            throw new AppError('Requested category item is not present', StatusCodes.NOT_FOUND);
        }

        return allItems;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError('Error while fetching menu-items', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function createMenuItem(data) {
    try {
        const menuItem = await menuItemRepo.create(data);
        return menuItem;
    } catch (error) {
        throw new AppError('Error while creating new menu-item', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function fetchItem(id) {
    try {
        const menuItem = await menuItemRepo.get(id);
        return menuItem;
    } catch (error) {
        if (error.name === 'CastError') {
            throw new AppError(error.message, StatusCodes.NOT_FOUND);
        }
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError('Error while creating new menu-item', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    fetchByCategory,
    createMenuItem,
    fetchItem
}