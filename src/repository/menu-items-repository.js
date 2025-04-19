const MenuItemModel = require('../models/MenuItem');

class MenuItemRepository {

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