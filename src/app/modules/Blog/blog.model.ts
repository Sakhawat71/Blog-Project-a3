import { Schema, model } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog>(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
        },
        content: {
            type: String,
            required: [true, "Content is required"],
            trim: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            // required: [true, "Author is required"],
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);




export const BlogModel = model<IBlog>("Blog", blogSchema);
