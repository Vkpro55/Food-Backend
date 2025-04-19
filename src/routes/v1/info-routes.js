const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send('API is Live...');
});

module.exports = router;