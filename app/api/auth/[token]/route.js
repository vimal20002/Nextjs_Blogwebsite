// 'use client'
const User = require("@models/User.js");
const { connectToDb } = require("@utils/database");
var jwt = require('jsonwebtoken');

export const GET = async(req,{params})=>{
try {
     await connectToDb()
    const token = params.token;
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    // console.log(decoded)
    const uid = decoded?.uid;
    const user = await User.findOne({_id:uid})
    return new Response(JSON.stringify({name:user.name, posts:user.post, uid:uid}), {status:200})


} catch (error) {
    console.log(error)
    return new Response(JSON.stringify({message:"Login Again Token Is Expired"}))

}
}