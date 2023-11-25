import { Schema,model } from "mongoose";


const videoSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type:String,
        required: [true,"title for video is mandatory"]
    },
    description: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0
    },
    disLikes: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    comments: {
        type: Array,
        default: []
    }
})

export const videoModel = model('video',videoSchema);