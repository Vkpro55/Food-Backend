const express = require('express');

const { UserMiddlewares } = require('../../middlewares');
const { UserControllers } = require('../../controllers');

const router = express.Router();

/**
 * POST: /api/v1/user/signup
 * body={
 *   name:""
 *   phone:""
 *   password:""
 * }
 */
router.post('/signup',
    UserMiddlewares.validateSingupRequest,
    UserControllers.singup)

router.post('/login',
    UserControllers.login)

module.exports = router;