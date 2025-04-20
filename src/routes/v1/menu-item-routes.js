const express = require('express');
const router = express.Router();

const { MenuItemMiddlewares } = require('../../middlewares');
const { MenuItemControllers } = require('../../controllers');

/**
 * GET: /api/v1/menu?category="drinks"
 */
router.get('/',
    MenuItemMiddlewares.validateFetchRequest,
    MenuItemControllers.fetchByCategory);

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

/**
 * GET: /api/v1/menu/6803c2cd4f156cd3c36...
 */
router.get('/:id', MenuItemControllers.fetchItem)

module.exports = router;