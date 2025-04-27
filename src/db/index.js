import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; // Fixed import path

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`); // Fixed template literal
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
};
export default connectDB;