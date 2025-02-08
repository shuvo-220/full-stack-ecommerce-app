const Order = require('../models/orderModel');

exports.newOrder = async(req, res)=>{
    const{
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
        paidAt:Date.now(),
        user:req.user._id
    });

    res.status(200).json(order);
}

exports.getSingleOrder = async(req, res)=>{
    const order = await Order.findById(req.params.id).populate("user", "name email");
    if(!order){
        res.status(500).json('Order not found');
    }
    res.status(200).json(order)
}

exports.myOrder=async(req, res)=>{
    const orders = await Order.find({user:req.user._id});
    res.status(200).json({
        orders
    });
}