import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponce";
import { blogService } from "./blog.service";

// create a blog
const createBlog = catchAsync(async (req, res) => {
    const blog = await blogService.createBlogIntoDB(req.body);
    sendResponse(res,{
        success : true,
        message: "Blog created successfully",
        statusCode :StatusCodes.CREATED,
        data : blog
    })
});


export const blogController = {
    createBlog,
};
