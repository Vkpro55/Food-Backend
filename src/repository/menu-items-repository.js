const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const MenuItemModel = require('../models/MenuItem');

class MenuItemRepository {

    async get(id) {
        const menuItem = await MenuItemModel.findById(id);

        if (!menuItem) {
            throw new AppError('Requested menu-item is not found', StatusCodes.NOT_FOUND);
        }

        return menuItem;
    }

    async getAll(category) {
        const allItems = await MenuItemModel.find();
        console.log(allItems);
    }

    async create({ name, imageURL, category, price, rating, description }) {
        const newItem = new MenuItemModel({
            name,
            imageURL,
            category,
            price,
            rating,
            description,
        });

        const savedItem = await newItem.save();

        return savedItem;
    }
}

module.exports = MenuItemRepository;