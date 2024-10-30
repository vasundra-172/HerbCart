const Listing = require("../models/listing");
const Cart = require("../models/Cart");
const User = require("../models/user");

module.exports.index = async (req, res) => {
    const cartItems = await Cart.find({});
    let totalPrice = 0;
    for (const cartItem of cartItems) {
      totalPrice += cartItem.productPrice * cartItem.quantity;
      res.locals.totalCount += cartItem.quantity;
    }
    res.render("listings/cart.ejs", {cartItems, totalPrice});
 }

module.exports.renderProfile = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/profile.ejs", {allListings});
}

module.exports.addToCart = async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    const userId = req.user._id;
    let productId = listing._id;
    let productName = listing.title;
    let productPrice = listing.price;
    let productImg = listing.image.url;
    try {
        let cartItem = await Cart.findOne({ productName, userId }); // Find by both productId and userId
        if (cartItem) {
          cartItem.quantity++;
        } else {
          cartItem = new Cart({
            userId, // Set the userId
            productId,
            productName,
            productPrice,
            productImg,
            quantity: 1
          }); 
        }
        let user = await User.findById(userId);
        user.items.push(cartItem);
        await cartItem.save();
        await user.save();
        console.log(cartItem);
        req.flash("success", "Added To Cart Successfully");
        res.redirect("/listings");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error adding product to cart' });
    }
}

module.exports.deleteCartItem = async (req, res) => {
  let itemId = req.params.id;
  const userId = req.user._id;
  let cartItem = await Cart.findById(itemId);
  try {
    if (cartItem) {
        // If quantity is greater than one, decrement it
        if (cartItem.quantity > 1) {
            cartItem.quantity = cartItem.quantity-1;
            await cartItem.save();
            await User.findByIdAndUpdate(userId, {$pull: {items: itemId}})
        } else {
            await Cart.findByIdAndDelete(itemId);
            await User.findByIdAndUpdate(userId, {$pull: {items: itemId}})
        }
    }
    res.redirect(`/cart`);
  } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
  }
}

module.exports.updateCartItem = async (req, res) => {
  const userId = req.user._id;
  let itemId = req.params.id;
  let cartItem = await Cart.findById(itemId);
  let productName = cartItem.productName;
  let productPrice = cartItem.productPrice;
  let productImg = cartItem.productImg;
  try {
      let cartItem = await Cart.findOne({ productName, userId }); // Find by both productId and userId
      if (cartItem) {
        cartItem.quantity++;
      } else {
        cartItem = new Cart({
          userId, // Set the userId
          productName,
          productPrice,
          productImg,
          quantity: 1
        }); 
      }
      let user = await User.findById(userId);
      user.items.push(cartItem);
      await cartItem.save();
      await user.save();
      console.log(cartItem);
      res.redirect(`/cart`);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error adding product to cart' });
  }
}

module.exports.renderCheckout =  (req, res) => {
  res.render("listings/checkout.ejs");
}