const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    passwordHash: {
      type: String,
      required: [true, "Password is required"],

    },
    Guid: {
        type:String,
        required:true
    },
    createdOn: {
        type:Date,
    }
})


const User = mongoose.model("User", userSchema);
module.exports = User;