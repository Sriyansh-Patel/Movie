import mongoose from 'mongoose';
import { getDbConnection } from "../db/db.js";

const userDb = getDbConnection("usersDb");

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    lastLogin:{
        type:Date,
        default:Date.now,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    resetPasswordToken:String,
    resetPasswordExpires:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date,
},{timestamps:true});

export const User = userDb.models.User || userDb.model("User", userSchema,"users");