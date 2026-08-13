import mongoose from "mongoose";
import env from "./env.js";


let connectDB = async () => {
    try{
        console.log("Connecting to MongoDB...")
        await mongoose.connect(env.MONGO_URL)
        console.log("Connected to MongoDB")
    } catch(error) {
         console.log("error connecting to MongoDB:", error);
    }
}


export default connectDB;