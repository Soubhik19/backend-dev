import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {DB_NAME} from './constants.js'
import connectDB from './db/index.js';

dotenv.config({
    path: './.env'
});
connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is listening on port${process.env.PORT || 8000}`)
    });

}).catch((error)=>{
    console.log(`MongoDB connection error !!!`,error);
})







/*
import express from 'express';
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/$
            {DB_NAME}`)
            app.on("Error",(error)=>{
                console.log("Err",error);
                throw error
            })
            app.listen(process.env.PORT,()=>{
                console.log(`app is listening on port $
                    {process.env.PORT}`)
            })
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        
    }
})()
*/