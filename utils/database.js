import mongoose from "mongoose";
export const connectToDb=async ()=>{
    try {
        mongoose.connect(process.env.DB_URI)
        .then(()=>{
            console.log("connected to db")
        })
        .catch(()=>{
            console.log("connection failed")
        })
    } catch (error) {
        console.log(error)
    }
}
