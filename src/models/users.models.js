import {mongoose} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema =new mongoose.Schema(
    {
        username:{
            type:String,
            required :true,
            unique:true,
            lowercase:true,
            trim :true,
            index : true,
        },
        email:{
            type:String,
            required :true,
            unique:true,
            lowercase:true,
            trim :true,
        },
        fullname:{
            type:String,
            required :true,
            index: true,
        },
        password:{
            type:String,
            required :[true,"Password is required"],
            lowercase:true,
        },
        avtar:{
            type:String,  //cloudinary url
            required :true,
            
        },
        coverImage:{
            type:String,  //cloudinary url
        },
        watchHistory:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        refreshToken:{
            type:String,
            default :null,
        },

    },
    {timestamps:true});


export const User =mongoose.model("User",userSchema)