const mongoose = require('mongoose');
const { Enums } = require('../utils/common');
const { APPETIZERS, MAINS, DESSERTS, DRINKS } = Enums.ITEM_CATEGORY;

const MenuItemSchema = new mongoose.Schema({
    imageURL: String,
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: [APPETIZERS, MAINS, DESSERTS, DRINKS],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', MenuItemSchema);
