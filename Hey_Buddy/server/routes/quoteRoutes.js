const express = require('express');
const router = express.Router();
const { getDailyQuote } = require('../controllers/quoteController');

router.get('/', getDailyQuote);

module.exports = router;

