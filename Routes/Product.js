const express = require('express');
const router = express.Router();
const{validateProduct, isLoggedIn ,isSeller ,isAuthor} = require('../middleware');
const{allProducts, newProductForm, newProduct, showProduct, editProductForm, editProduct, deleteProduct} = require('../Controllers/Product');

router.get('/products', allProducts);
router.get('/products/new', isLoggedIn, isSeller, newProductForm);
router.post('/products', validateProduct, isLoggedIn, isSeller, newProduct);
router.get('/products/:id', showProduct);
router.get('/products/:id/edit', isLoggedIn, isAuthor, editProductForm);
router.patch('/products/:id/edit', validateProduct, isLoggedIn, isAuthor, editProduct);
router.delete('/products/:id', isLoggedIn, isAuthor, deleteProduct);



module.exports = router;