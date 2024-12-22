import { UserModel } from "../User/user.model";

// block user 
const blockUserByAdmin = async (id : string) => {
    return await UserModel.findByIdAndUpdate(
        id,
        {isBlocked : true}
    ); 
};


export const adminServices = {
    blockUserByAdmin,

}