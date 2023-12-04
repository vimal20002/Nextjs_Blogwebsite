const Post = require("@models/Post.js");

const { connectToDb } = require("@utils/database");
export const GET = async()=>{
    try {
        await connectToDb();
        const data = await Post.find({})     
        return new Response(JSON.stringify(data), {status:200})
    } catch (error) {
        console.log(error)
    }
}