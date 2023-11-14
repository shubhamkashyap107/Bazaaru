const express = require('express');
const router = express.Router();
const{isLoggedIn} = require('../middleware');
const{showCart, addProduct} = require('../Controllers/Cart');

router.get('/user/cart', isLoggedIn, showCart);
router.post('/user/:id/add',isLoggedIn, addProduct);

module.exports = router;