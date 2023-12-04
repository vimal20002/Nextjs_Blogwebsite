
const User = require("@models/User.js");
const Post = require("@models/Post.js");

const { connectToDb } = require("@utils/database");
export const POST = async(req)=>{
try {
    await connectToDb()
    const body = await req.json();
    const {uid, post} = body;
    console.log(uid, post)
    const user = await User.findById(uid)
    const userName = user?.name;
    if(user)
    {
        const newPost = new Post({uid, userName, post})
        await newPost.save();
        const arr = user?.posts;
        const postId = newPost._id;
        arr.push({...post, postId});
        user.posts = arr;
        await user.save();
        console.log(user)
        return new Response(JSON.stringify({message:"Posted Successfully"}), {status:201})
    }
    return new Response(JSON.stringify({message:"Invalid User"}), {status:400})
} catch (error) {
    console.log(error)
}
}