const express = require('express');
const router = express.Router();

const basic = require('./controllers/BasicController.js');

router.get('/flyers', basic.flyers);

module.exports = router
