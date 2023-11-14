const Product = require('../Models/Product');
const Review = require('../Models/Review');

const addReview = async(req, res) => {
    try {
        let{name, review, rating} = req.body;
        let {id} = req.params;
        let product = await Product.findById(id);
        let newReview =  await Review.create({name, review, rating});
        await newReview.save();
        product.reviews.push(newReview);
        await product.save();
        res.redirect(`/products/${id}`);
    } catch (error) {
        res.render('./products/error', {error});
    }
};


module.exports = addReview;