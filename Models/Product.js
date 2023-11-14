let mongoose = require('mongoose');
const Review = require('./Review');


let productSchema = new mongoose.Schema({
    category : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        trim : true,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    img : {
        type : String,
        trim : true,
        required : true
    },
    desc : {
        type : String,
        trim : true,
        required : true
    },
    reviews : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    author :
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },

});

productSchema.post('findOneAndDelete', async(product) => {
    // console.log("in middleware")
    if(product.reviews.length > 0)
    {
        await Review.deleteMany({_id : {$in : product.reviews}});
    }
})

let Product = mongoose.model('Product', productSchema);

module.exports = Product;