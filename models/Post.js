const  mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    post:Object,
    userName:String,
    uid:String
})
module.exports= mongoose.models.Post || mongoose.model('Post',postSchema);