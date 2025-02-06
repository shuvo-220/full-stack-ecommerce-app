const express = require('express');
const { 
    createProduct, 
    updateProduct, 
    deleteProduct, 
    createReview 
} = require('../controllers/productController');
const{ auth, roles } = require('../auth/auth')
const router = express.Router();

router.post('/createProduct', auth, roles('admin'), createProduct);
router.put('/product/update/:id', auth, roles('admin'), updateProduct);
router.delete('/product/delete/:id', auth, roles('admin'), deleteProduct);
router.put('/product/review', auth, createReview);

module.exports = router;