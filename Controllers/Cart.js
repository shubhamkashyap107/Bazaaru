const Product = require('../Models/Product');
const User = require('../Models/User');

const showCart = async(req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('cart');
        const totalAmount = user.cart.reduce((sum , curr)=> sum+curr.price , 0);
        const productInfo = user.cart.map((p)=>p.desc).join(',');

        const hm = new Map();
        for(let item of user.cart)
        {
            if(hm.has(item))
            {
                hm.set(item, hm.get(item) + 1);
            }
            else
            {
                hm.set(item, 1);
            }
        }
        let map = new Map();
        for (let [key, value] of hm) {
            // console.log(key._id + " is " + value);
            map.set(key._id, value);
        }
        
        res.render('cart/cart' , {user, totalAmount, productInfo, map})
    } catch (error) {
        res.render('./products/error', {error});
    }
};

const addProduct = async(req, res) => {
    try {
        let{id} = req.params;
        let product = await Product.findById(id);
        let user = await User.findById(req.user._id);
        await user.cart.push(product);
        await  user.save();
        await  req.flash('success', "Added to cart!")
        // setTimeout(() => {
        //     res.redirect('/user/cart');
        //   }, 2000);
        res.redirect('/user/cart');
    } catch (error) {
        res.render('./products/error', {error});
    }
    
};

module.exports = {showCart, addProduct};