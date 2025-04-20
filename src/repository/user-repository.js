const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const { User } = require('../models');


class UerRepository {

    async create(data) {
        const response = await User.create(data);
        return response;
    }

    async getUserByPhone(phone) {
        const user = await User.findOne({
            where: {
                phone: phone
            }
        });

        return user;
    };
}

module.exports = UerRepository;