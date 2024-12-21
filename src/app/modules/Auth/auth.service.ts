import { IUser } from "../User/user.interface";
import { UserModel } from "../User/user.model";
import { ILoginUser } from "./auth.interface";


// register
const registerUser = async (payLoad : IUser) => {
    return await UserModel.create(payLoad);
};

// login
const loginUser = async (payLoad : ILoginUser) => {
    // return await UserModel.create(payLoad);
};

export const authService = {
    registerUser,
    loginUser
};