import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.log(error);
        console.log("Error connecting to MongoDB");
        process.exit(1);
    }

}