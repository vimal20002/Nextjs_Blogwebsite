const User = require("@models/User.js");
const { connectToDb } = require("@utils/database");
export const POST = async(req, res)=>{
    const body = await req.json()
    const {email} = body;
    await connectToDb();
    const user = await User.findOne({email:email})
    console.log(user)
    if(user){
        return new Response(JSON.stringify({message:"User Already Exits"}),{status:201});
    }
    else{
        console.log(body)
        const nuser = new User({...body});
        await nuser.save();
        console.log(nuser)
        return new Response(JSON.stringify({message:"Registered successfully"}),{status:201});
    }
}