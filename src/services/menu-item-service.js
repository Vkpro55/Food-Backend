const { StatusCodes } = require('http-status-codes');
const { MenuItemRepository } = require('../repository');
const AppError = require('../utils/errors/app-error');

const menuItemRepo = new MenuItemRepository();

async function fetchByCategory(data) {
    try {
        const response = await menuItemRepo.getAll(data);
    } catch (error) {

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

module.exports = {
    fetchByCategory,
    createMenuItem
}