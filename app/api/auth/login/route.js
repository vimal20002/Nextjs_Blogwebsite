const User = require("@models/User.js");
var jwt = require('jsonwebtoken');

const { connectToDb } = require("@utils/database");

export const POST = async(req)=>{
    
    try {
        await connectToDb();
        const body = await req.json();
        const {email, password} = body;
        console.log(body)
        const user = await User.findOne({email:email})
        if(user && user.password === password)
        {
            const token =  jwt.sign({uid:user._id},process.env.SECRET_KEY,{ expiresIn:'2d'})
            console.log(token)
            return new Response(JSON.stringify({name:user.name, uid:user._id, token}), {status:200})
        }
        else{
            return new Response(JSON.stringify({message: "Register First"}), {status:400})
        }
    } catch (error) {
        console.log(error)
    }
}