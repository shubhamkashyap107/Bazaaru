const Product = require('../Models/Product');
const User = require('../Models/User');
const Review = require('../Models/Review');


const allProducts = async (req,res) => {
    try{
        let products = await Product.find({});
        res.render('products/index', {products, msg : req.flash('success')});
    }
    catch(error)
    {
        res.render('./products/error', {error});
    }
    
};

const newProductForm = (req, res) => {
    try {
        res.render('./products/new')
    } catch (error) {
        res.render('./products/error', {error});
    }
    
};

const newProduct = async(req, res) => {
    try {
        let{category, name, price, img, desc} = req.body;
        let product = new Product({category, name, price, img, desc, author: req.user._id});
        await product.save();
        req.flash('success', 'Product added successfully!')
        res.redirect('/products');
    } catch (error) {
        res.render('./products/error', {error});
    }
};

const showProduct = async(req, res) => {
    try {
        let{id} = req.params;
    let product = await Product.findById(id).populate('reviews');
    res.render('./products/show', {product, msg : req.flash('success')});
    } catch (error) {
        res.render('./products/error', {error});
    }  
};

const editProductForm = async (req, res) => {
    try {
        let{id} = req.params;
        let product = await Product.findById(id);
        res.render('./products/edit', {product})
    } catch (error) {
        res.render('.products/error', {error})
    }
    
};

const editProduct =  async (req, res) => {
    try {
        let{id} = req.params;
        let {category, name, price, img, desc} = req.body;
        await Product.findByIdAndUpdate(id, {category, name, price, img, desc});
        req.flash('success', 'Product edited successfully!')
        res.redirect(`/products/${id}`);
    } catch (error) {
        res.render('.products/error', {error})
    }
    
};

const deleteProduct = async(req, res) => {
    try {
        let{id} = req.params;
        let product =  await Product.findById(id);
        for(let item of product.reviews){
            await Review.findByIdAndDelete(item);
        }
        console.log(1)
        const AllUsers = await User.find();
        console.log(AllUsers)
        console.log(2)
        for(let item of AllUsers){
                await User.findByIdAndUpdate(item._id,  {$pull : {cart : id}});
                await User.findByIdAndUpdate(item._id,  {$pull : {wishList : id}});        
        }
        console.log(3)
        await Product.findByIdAndDelete(id);
        req.flash('success', 'Product deleted successfully!')
        res.redirect('/products');
    } catch (error) {
        // res.render('.products/error', {error})
    }
};


module.exports = {allProducts, newProductForm, newProduct, showProduct, editProductForm, editProduct, deleteProduct};