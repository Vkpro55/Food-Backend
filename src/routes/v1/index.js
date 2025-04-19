const express = require('express');

const infoRouter = require('./info-routes');
const menuRouter = require('./menu-item-routes');
const router = express.Router();

router.use('/info', infoRouter);
router.use('/menu', menuRouter);

module.exports = router;