import { IUser } from "../User/user.interface";
import { UserModel } from "../User/user.model";


// register
const registerUser = async (payLoad : IUser) => {
    return await UserModel.create(payLoad);
};

// login
const loginUser = async () => {
    return await UserModel.create();
};

export const authService = {
    registerUser,
    loginUser
};