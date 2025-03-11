const express = require('express');
const { 
    createProduct, 
    updateProduct, 
    deleteProduct, 
    createReview, 
    getAllProducts,
    productDetails
} = require('../controllers/productController');
const{ auth, roles } = require('../auth/auth');
const upload = require('../middleware/upload');
const router = express.Router();

router.post('/createProduct', auth,roles('admin'), upload.single('image'), createProduct);
router.put('/product/update/:id', auth, roles('admin'), updateProduct);
router.delete('/product/delete/:id', auth, roles('admin'), deleteProduct);
router.put('/product/review', auth, createReview);
router.get('/products', getAllProducts);
router.get('/product/:id', productDetails);

module.exports = router;