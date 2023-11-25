import e from "express";
import { Schema,model } from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        required: [true,"User name is required to create an account"],
        unique: [true,"Account with this username already exists"]
    },
    email: {
        type: String,
        required: [true,"Email is required create an account"],
        unique: [true,"Account with this email already exists"]
    },
    password: {
        type: String,
        required: [true,"Password is required to create an account"],
    },
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: 'video'
        }
    ],
    //People that are subscribers
    subscribers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ],

    //Subscribed Channel
    subscribed: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
})

export const userModel = model('user',userSchema);