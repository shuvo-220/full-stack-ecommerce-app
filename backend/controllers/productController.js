const Product = require('../models/productModel');

exports.createProduct = async(req, res)=>{
    const{name,desc,price,category} = req.body;
    const image = req.file.files;
    try {
        const product = await Product.create({
            name,desc,price,category,image
        })
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.updateProduct = async(req, res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if(!product){
        res.status(500).json('product not found');
    }
    res.status(200).json(product);
}

exports.getAllProducts = async(req, res)=>{
    const products = await Product.find({});
    if(!products){
        res.status(500).json('Product not found');
    }
    res.status(200).json(products);
}

exports.productDetails = async(req, res)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(500).json('Product not found');
    }
    res.status(200).json(product);
}

exports.deleteProduct = async(req, res)=>{
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product){
        res.status(400).json('Product not found');
    }
    res.status(200).json('Product Deleted Successfully');
}


//create product review and update product review
exports.createReview = async(req, res)=>{
    const{rating,comment,productId} = req.body;

    const review = {
        user:req.user._id,
        name:req.user.name,
        rating:Number(rating),
        comment
    }

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find(rev=>(
        rev.user.toString() === req.user._id.toString()
    ));

    if(isReviewed){
        product.reviews.forEach(rev=>{
            if(rev.user.toString() === rev.user._id.toString()){
                rev.rating = rating,
                rev.comment = comment
            }
        })
    }else{
        product.reviews.push(review)
        product.numOfReviews = product.reviews.length;
    }

    let avg = 0;
    product.reviews.forEach((rev)=>{
        avg = avg + rev.rating
    })

    product.rating = avg/product.reviews.length

    await product.save();

    res.status(200).json('review successfull');
}