const express = require('express');
const router = express.Router();
// const Product = require('../../Models/Product');
const User = require('../../Models/User');
const{isLoggedIn} = require('../../middleware')



router.post('/user/:id/remove', isLoggedIn, async(req, res) => {
    let{id} = req.params;
    let userID = req.user._id;
    let user =  await User.findById(userID);
    for(let i = 0; i < user.cart.length; i++)
    {
        if(user.cart[i].equals(id))
        {
            let arr = user.cart.splice(i,1);
            break;
        }   
    }
    user.save();

    // await User.findByIdAndUpdate(userID, {$pull : {cart : id}});
    // let user = await User.findById(id);
    req.flash('success', 'Product removed from the cart!')
    res.redirect('/user/cart');
});


module.exports = router;