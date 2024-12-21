import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponce";
import { authService } from "./auth.service";
import { StatusCodes } from 'http-status-codes';

const register = catchAsync(async (req, res) => {
    const result = await authService.registerUser(req.body);
    sendResponse(res,{
        statusCode: StatusCodes.CREATED,
        success: true,
        message:'User registered successfully',
        data: result
    })
});

export const userController = {
    register
};
