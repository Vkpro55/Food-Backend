const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

const { UserService } = require('../services');

async function singup(req, res) {
    try {
        const user = await UserService.signup({
            name: req.body.name,
            phone: req.body.phone,
            password: req.body.password
        });
        SuccessResponse.data = user;

        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;

        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function login(req, res) {
    try {
        const user = await UserService.login({
            phone: req.body.phone,
            password: req.body.password
        });
        SuccessResponse.data = user;

        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);

    } catch (error) {
        console.log("Error is:", error);
        ErrorResponse.error = error;

        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    singup,
    login
}