const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Listing",
    },
    productName: {
        type: String,
        ref: "Listing",
    },
    productPrice: {
        type: Number,
        ref: "Listing"
    },
    productImg: {
        type: String,
        ref: "Listing"
    },
    quantity: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
