import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const dbConfig = async ()=>{
    try { 
         await mongoose.connect(process.env.MONGO_URI);
         console.log('Connected to MongoDB');
        
    } catch (error) {
        console.log("Mongo Db connection error" , error.message);
    }
}

export default dbConfig;
