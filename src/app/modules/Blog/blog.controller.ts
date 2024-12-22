import jwt, { JwtPayload } from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponce";
import { blogService } from "./blog.service";
import AppError from "../../errors/appError";
import config from '../../config';
import { UserModel } from '../User/user.model';
import { BlogModel } from './blog.model';

// create a blog
const createBlog = catchAsync(async (req, res) => {

    const { title, content } = req.body;
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new AppError(
            StatusCodes.UNAUTHORIZED,
            'Unauthorized access',
        );
    };

    const token = authHeader?.split(' ')[1];
    const decoded = jwt.verify(token as string, config.accessTokenSecret as string) as JwtPayload;
    const { id } = decoded;

    const user = await UserModel.findById(id);
    if (!user) {
        throw new AppError(
            StatusCodes.NOT_FOUND,
            'User not found',
        );
    };
    if (user.isBlocked) {
        throw new AppError(
            StatusCodes.BAD_REQUEST,
            'User is blocked',
        );
    };

    // send blog and author details 
    const blog = await blogService.createBlogIntoDB({ title, content, author: id });
    const populatedBlog = await blog.populate('author');
    sendResponse(res, {
        success: true,
        message: "Blog created successfully",
        statusCode: StatusCodes.CREATED,
        data: populatedBlog,
    });
});


// upate a blog
const updateBlog = catchAsync(async (req, res) => {
    const { title, content } = req.body;
    const { id: blogId } = req.params;

    // console.log(req.params);

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new AppError(
            StatusCodes.UNAUTHORIZED,
            'Unauthorized access',
        );
    };

    const token = authHeader?.split(' ')[1];
    const decoded = jwt.verify(token as string, config.accessTokenSecret as string) as JwtPayload;
    const { id } = decoded;

    const user = await UserModel.findById(id);
    if (!user) {
        throw new AppError(
            StatusCodes.NOT_FOUND,
            'User not found',
        );
    };
    if (user.isBlocked) {
        throw new AppError(
            StatusCodes.BAD_REQUEST,
            'User is blocked',
        );
    };


    // check blog exist or not
    const findBlog = await BlogModel.findById(blogId);
    if (!findBlog) {
        throw new AppError(
            StatusCodes.NOT_FOUND,
            'Blog not Found'
        );
    };


    if (!(id === findBlog?.author?.toString())) {
        throw new AppError(
            StatusCodes.UNAUTHORIZED,
            'Unauthorized access'
        )
    }


    // send blog and author details
    const blog = await blogService.updateBlogByIdInDB(blogId, { title, content });
    const populatedBlog = await blog?.populate('author');
    sendResponse(res, {
        success: true,
        message: "Blog updated successfully",
        statusCode: StatusCodes.OK,
        data: populatedBlog,
    });
});


// get single blog
const getSingleBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    const blog = await blogService.getBlogByIdFromDB(id);
    sendResponse(res, {
        success: true,
        message: "Blogs fetched successfully",
        statusCode: StatusCodes.OK,
        data: blog,
    });
});


export const blogController = {
    createBlog,
    updateBlog,
    getSingleBlog,
};
