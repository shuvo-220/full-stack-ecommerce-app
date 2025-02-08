const express = require('express');
const { auth,roles } = require('../auth/auth');
const { newOrder, getSingleOrder, myOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/order', auth, newOrder);
router.get('/order/:id', auth, roles('admin') ,getSingleOrder);
router.get('/order/me', auth, myOrder);

module.exports = router;