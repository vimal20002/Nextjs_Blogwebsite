const  mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String,
    posts:[Object]
})
 
module.exports= mongoose.models.User || mongoose.model("User", userSchema)