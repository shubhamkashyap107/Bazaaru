const express = require('express');
const router = express.Router();
const passport = require('passport');
const{signupForm, signup, loginForm, login, logout} = require('../Controllers/Auth');

router.get('/register', signupForm);
router.post('/register', signup);
router.get('/login', loginForm);
router.post('/login',passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }), login);
router.get('/logout', logout);

module.exports = router;