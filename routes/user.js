const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const cartController = require("../controllers/cart.js");
const userController = require("../controllers/users.js");
const { isLoggedIn, isLoggedInForCart } = require("../middleware.js");

router
.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl , passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), userController.login);

router.get("/logout", userController.logout);
 
// Cart
router
.route("/cart")
.get( wrapAsync(cartController.index))

// Edit Cart
router.route("/cart/:id")
.post(isLoggedInForCart, wrapAsync(cartController.addToCart))
.delete(isLoggedIn, wrapAsync(cartController.deleteCartItem))
.put(isLoggedIn, wrapAsync(cartController.updateCartItem))

//CheckOut Route 
router.get("/cart/checkout", cartController.renderCheckout);

//Profile Route 
router.route("/profile")
.get(cartController.renderProfile)

module.exports = router;