const User = require("@models/User.js");
const { connectToDb } = require("@utils/database");
export const GET = async(req, {params})=>{
    try {
     await connectToDb();   
     const uid = params.uid;
     console.log(params)
     const user = await User.findById(uid)
    if(user)
    {
        const arr = user?.posts;
        return new Response(JSON.stringify({data:arr, userName:user.name}), {status:200})
    }
    return new Response(JSON.stringify({message:"Invalid User"}), {status:400})
    } catch (error) {
        console.log(error)
    }
}