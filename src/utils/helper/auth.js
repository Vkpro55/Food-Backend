const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { config } = require('dotenv');
config();

function comparePassword(plainPassword, encryptPassword) {
    try {
        return bcrypt.compareSync(plainPassword, encryptPassword);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

function createToken(input) {
    try {
        return jwt.sign(input, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

function verifyToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    comparePassword,
    createToken,
    verifyToken
}