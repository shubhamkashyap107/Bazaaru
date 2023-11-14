const express = require('express');
const router = express.Router();
const addReview = require('../Controllers/Review');

router.post('/products/:id/reviews', addReview);

module.exports = router;