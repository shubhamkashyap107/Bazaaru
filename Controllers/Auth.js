const User = require('../Models/User');


const signupForm = (req, res) => {
    try {
        res.render('./auth/signup');
    } catch (error) {
        res.render('./products/error', {error});
    }  
};

const signup = async(req, res) => {
    try {
        let{username, email, password, role} = req.body;
        let user = new User({username, email, role});
        const newUser = await User.register(user, password);
        req.login(newUser, (error) => {
            if(error){
                return next(error);
            }
            req.flash('success', "User registered successfully!")
            res.redirect('/products');
        })
    } catch (error) {
        req.flash('error', error.message);
        return res.redirect('/register')
    }  
};

const loginForm = (req, res) => {
    res.render('./auth/login');
};

const login = (req, res) => {
    req.flash('success', "Logged in successfully!");
    res.redirect('/products');
};



const logout = (req,res)=>{
    req.logout(()=>{
        req.flash('success' , 'Signed out successfully!');
        res.redirect('/login');
    });
};

module.exports = {signupForm, signup, loginForm, login, logout};