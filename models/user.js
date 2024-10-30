// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");

// const userSchema = new Schema({
//     email: {
//         type: String,
//         required: true
//     }
// });

// userSchema.plugin(passportLocalMongoose);

// module.exports = mongoose.model('User', userSchema);
//const { required } = require("joi");
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
    },
    items : [
        {
        type: Schema.Types.ObjectId,
        ref: "Cart"
        }
    ]
})
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User",userSchema);
module.exports = User;