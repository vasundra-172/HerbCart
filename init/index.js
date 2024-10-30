const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const FrontImg = require("../models/headImg.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/herbs";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj, owner: "6721d0e4bcd8127d9f5f0b7d"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
const initImg = async () => {
  await FrontImg.deleteMany({});
  await FrontImg.insertMany(initData.frontImg);
}

initDB();
initImg();