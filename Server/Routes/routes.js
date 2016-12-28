var express = require('express');
var router = express.Router();

var Auth = require('../MiddleWare/auth.js');
var UserMethods = require('../Controllers/userController.js');
var EmailMethods = require('../Controllers/emailController.js');


/* =============== LOGIN ================= */
router.post('/login', Auth.login);



/* ================ USER ENDPOINTS ================ */

// CREATE NEW USER OR RESPOND WITH USER
router.post('/api/user', UserMethods.createUser);

// CHECK FOR EXISTING USER
router.post('/api/user/check', UserMethods.checkUser);


// RESPOND WITH ONE USER BASED ON EMAIL
router.get('/api/user/:email', UserMethods.getOneUser);


// RESPOND WITH ALL USERS
router.get('/api/v1/users', UserMethods.getAllUsers);



/* =============== EMAIL ENDPOINTS =============== */

//RESPOND WITH SENT EMAIL CONFIRMATION
router.post('/api/email/forgotPassword', EmailMethods.sendForgotPasswordEmail);


module.exports = router;