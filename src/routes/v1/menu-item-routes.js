const express = require('express');
const router = express.Router();

const { MenuItemMiddlewares } = require('../../middlewares');
const { MenuItemControllers } = require('../../controllers');

/**
 * GET: /api/v1/menu?category="drinks"
 */
router.get('/', MenuItemMiddlewares.validateFetchRequest);

/**
 * POST: /api/v1/menu
 * body:{
 *   name:
 *   imageURL:
 *   category:
 *   price:
 *   rating:
 *   description
 * }
 */
router.post('/',
    MenuItemMiddlewares.validatePostRequest,
    MenuItemControllers.createMenuItem);

module.exports = router;