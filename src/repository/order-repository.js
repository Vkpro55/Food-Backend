const { Order } = require('../models');

class OrderRepository {

    async create({ userId, items, totalPrice }) {
        const order = await Order.create({
            userId: userId,
            items: items,
            totalPrice: totalPrice,
        });

        return order;
    }

}

module.exports = OrderRepository;