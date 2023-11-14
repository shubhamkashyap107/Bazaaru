if(process.env.NODE_ENV != 'production')
{
    require('dotenv').config();
    // console.log(process.env)
}

const express = require('express');
const app = express();
const path = require('path');
const seedDB  = require('./seed');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const User = require('./Models/User');

const passport = require('passport');
const LocalStrategy = require('passport-local');

// Routes
const productRoutes = require('./Routes/Product');
const reviewRoutes = require('./Routes/Reviews')
const authRoutes = require('./Routes/Auth');
const productApi = require('./Routes/api/productApi');
const cartApi = require('./Routes/api/cartApi');
const cartRoutes = require('./Routes/Cart');
const paymentRoutes = require('./Routes/Payment');



const dbURL = 'mongodb+srv://shubhamkashyap107:bYHBP1YCwCq0fExS@ecom-cluster.jketpdg.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);
mongoose.connect(dbURL)
    .then(() => {
        console.log('DB Connected')
        // seedDB();
    })
    .catch((err) => console.log(err));





app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        // secure: true
        httpOnly: true,
        expires : Date.now() + 24*7*60*60*1000,
        maxAge : 24*7*60*60*1000
      }
  }))

app.use(flash())
// passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());





app.use( (req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    
    next();
} )



app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);
app.use(productApi);
app.use(cartApi);
app.use(cartRoutes);
app.use(paymentRoutes);

app.use('*', (req, res) => {
    res.render('./products/error');
})




app.listen(process.env.PORT, () => {
    console.log("Server Connected to Port")
})