const express = require('express');
const { auth,roles } = require('../auth/auth');
const { 
    newOrder, 
    getSingleOrder, 
    myOrder, 
    getAllOrders,
    deleteOrder,
    updateOrderStatus
} = require('../controllers/orderController');
const router = express.Router();

router.post('/order', auth, newOrder);
router.get('/order/me', auth, myOrder);
router.get('/order/:id', auth, roles('admin'), getSingleOrder);
router.get('/orders', auth, roles('admin'), getAllOrders);
router.delete('/order/update/:id', auth, roles('admin'), updateOrderStatus);
router.delete('/order/delete/:id', auth, roles('admin'), deleteOrder);

module.exports = router;