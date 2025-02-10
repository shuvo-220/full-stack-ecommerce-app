const Order = require('../models/orderModel');
const Product = require('../models/productModel');

exports.newOrder = async (req, res) => {
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id
    });

    res.status(200).json(order);
}

exports.myOrder=async(req, res)=>{
    const order = await Order.find({user:req.user._id});
    res.status(200).json({
        order
    });
}

exports.getSingleOrder = async(req, res)=>{
    const orderDetail = await Order.findById(req.params.id).populate("user", "name email");
    if(!orderDetail){
        res.status(500).json('order not found');
    }
    res.status(200).json(orderDetail);
}

exports.getAllOrders = async(req, res)=>{
    const orders = await Order.find({});
    if(!orders){
        res.status(500).json('order not found');
    }
    let totalAmount = 0;
    orders.forEach(order=>{
        totalAmount = totalAmount+order.totalPrice;
    })
    res.status(200).json({orders, totalAmount});
}

exports.updateOrderStatus = async(req, res)=>{
    const order = await Order.findById(req.params.id);
    if(order.orderStatus === 'Delivered'){
        res.status(400).json('You already delivered this product');
    }
    order.orderStatus = req.body.status;
    if(req.body.status === 'Delivered'){
        order.deliveredAt = Date.now()
    }
    await order.save();
}

exports.deleteOrder = async(req, res)=>{
    const order = await Order.findByIdAndDelete(req.params.id);
    if(!order){
        res.status(500).json('order not found');
    }
    res.status(200).json('order delete successfull');
}