const Product = require('./Models/Product');
let{productSchema, reviewSchema} = require('./Schema');




const validateProduct = (req, res, next) => {
    let{name, category, price, img, desc} = req.body;
    const{error} = productSchema.validate({name, category, price, img, desc});
    if(error)
    {
        return res.render('./products/error', {error : error.message})
    }
    else{
        next();
    }
};

const validateReview = (req, res, next) => {
    let{name, rating, comment} = req.body;
    const{error} = reviewSchema.validate({name, rating, comment});
    if(error)
    {
        return res.render('./products/error', {error : error.message})
    }
    else{
        next();
    }
};

const isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.flash('error', 'Please log in first!')
        return res.redirect('/login');
    }
    // console.log('is logged in')
    next();
};

const isSeller = (req, res, next) =>
{
    if(req.user.role !== 'seller'){
        req.flash('error' , 'You donot have the permission to do that');
        return res.redirect('/products');
    }
    next();
}

const isAuthor = async(req, res, next) => {

    let {id} = req.params; //product id
    let product = await Product.findById(id); //entire product
    // console.log(product)
    if(!product.author.equals(req.user._id)){
        // console.log("denied")
        req.flash('error' , 'You are not the authorised user');
        return res.redirect('/products');
    }
    // console.log("accepted")
    next();
};


module.exports = {validateProduct, validateReview, isLoggedIn ,isSeller, isAuthor};














