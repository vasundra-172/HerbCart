const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const frontImg = new Schema({
    image1 : String,
    image2 : String,
    image3 : String,
    image4 : String,
})
const FrontImg = mongoose.model("FrontImage", frontImg);
module.exports = FrontImg