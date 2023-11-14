const express = require('express');
const router = express.Router();
// const Product = require('../../Models/Product');
const User = require('../../Models/User');
const{isLoggedIn} = require('../../middleware')

router.post('/products/:id/like', isLoggedIn, async(req, res) => {
    // console.log('in API')
    let{id} = req.params;
    let user = req.user;
    // console.log(user)
    const isLiked = user.wishList.includes(id);

    if(isLiked)
    {
        await User.findByIdAndUpdate(req.user._id,  {$pull : {wishList : id}});
    }
    else
    {
        await User.findByIdAndUpdate(req.user._id,  {$addToSet : {wishList : id}});
    }

    res.send('like api done')
})













module.exports = router;