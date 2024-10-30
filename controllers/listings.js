const Listing = require("../models/listing");
const FrontImg = require("../models/headImg.js");
const Cart = require("../models/Cart");
const User = require("../models/user");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    const allimg = await FrontImg.find({});
    const allCartItems = await Cart.find({});
    for (const cartItem of allCartItems) {
      res.locals.totalPrice += cartItem.productPrice * cartItem.quantity;
      res.locals.totalCount += cartItem.quantity;
    }
    res.render("listings/index.ejs", {allListings, allimg, allCartItems});
}


module.exports.renderNewForm =  (req, res) => {
    res.render("listings/new.ejs"); 
}

module.exports.searchListings = async (req, res) => {
    let title = req.query.title;
    let searchedHerb = new RegExp(title, 'i'); // Case-insensitive regular expression
    let allHerbs = await Listing.find({ title: searchedHerb });
    if (!allHerbs.length) {
      req.flash("error", "The herb you are searching for, is not available!");
      return res.redirect("/listings");
    }
    res.render("listings/search.ejs", { allHerbs, searchedHerb });
  };

module.exports.showListing = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path: "reviews", 
        populate: {
        path: "author",
        }
    })
    .populate("owner");
    if( ! listing) {
        req.flash("error", "Herb you requested for does not exist!");
        res.redirect("/listings");
    }
    const allCartItems = await Cart.find({});
    for (const cartItem of allCartItems) {
        res.locals.totalPrice += cartItem.productPrice * cartItem.quantity;
        res.locals.totalCount += cartItem.quantity;
    }
    res.render("listings/show.ejs", {listing, allCartItems});
}

module.exports.createListing = async(req, res, next) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.address,
        limit: 2
      })
        .send()

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    newListing.geometry = response.body.features[0].geometry
    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Herb Added!");
    res.redirect("/listings");
}

module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "Herb you requested for does not exist!");
        res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250")
    res.render("listings/edit.ejs", {listing, originalImageUrl}); 
}

module.exports.updateListing = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    if(typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url, filename};
    await listing.save();
    }
    req.flash("success", "Herb details Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res) => {
    let {id} = req.params;
    const userId = req.user._id;
    let deletedListing = await Listing.findByIdAndDelete(id);
    let herbId = deletedListing.id;
    let cartItem = Cart.findOne({productId: herbId})
    if(cartItem){
        await Cart.findOneAndDelete({productId: herbId});
        let itemId = cartItem.id;
        await User.findByIdAndUpdate(userId, {$pull: {items: itemId}})  
    }
    console.log(deletedListing);
    req.flash("success", "Herb Deleted!");
    res.redirect("/listings");
}

