import mongoose, { Document } from "mongoose";

export interface UserInterface {
    username: string,
    fullname: string,
    email: string,
    profilePhoto: string
}

export interface UserDocument extends UserInterface, Document {
    createdAt: Date,
    updatedAt: Date
}

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePhoto: {
        type: String,
        default: ""
    }
}, { timestamps: true })

export const User = mongoose?.models?.User || mongoose?.model('UserSchema', userModel)