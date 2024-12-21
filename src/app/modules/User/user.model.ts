import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
    {
        id: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        email: { type: String, required: true ,unique : true},
        password: { type: String, required: true },
        role: { type: String, enum: ["admin", "user"], required: true ,default: "user"},
        isBlocked: { type: Boolean, required: true, default: false },
    },
    {
        timestamps: true
    }
);

export const UserModel = model<IUser>("User", userSchema);