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

    async getAll({ userId }) {
        const orders = await Order.findAll({
            where: { userId },
            order: [['createdAt', 'DESC']],
        });
        return orders;
    }

}

module.exports = OrderRepository;