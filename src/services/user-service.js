const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const Auth = require('../utils/helper/auth');
const { UserRepository } = require('../repository');

const userRepository = new UserRepository();

async function signup(data) {
    try {
        const user = await userRepository.create(data);
        return user;
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

async function login(data) {
    try {
        const user = await userRepository.getUserByPhone(data.phone);
        if (!user) {
            throw new AppError("No user is found for given email", StatusCodes.NOT_FOUND);
        }

        console.log("User", user);

        const passwordMatch = Auth.comparePassword(data.password, user.password);

        if (!passwordMatch) {
            throw new AppError("Invalid Password", StatusCodes.BAD_REQUEST);
        }

        const jwt = Auth.createToken({ id: user.id, email: user.email });

        return jwt;
    } catch (error) {
        console.log("Error is: ", error);
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("Something went wrong", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    signup,
    login
}