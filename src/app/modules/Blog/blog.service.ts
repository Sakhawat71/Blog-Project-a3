import QueryBuilder from "../../builder/queryBuilder";
import { IBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";


// create 
const createBlogIntoDB = async (payLoad: IBlog) => {
    return await BlogModel.create(payLoad);
};

// get all 
const getAllBlogsFromDB = async (query: Record<string, unknown>) => {

    const blogQuery = new QueryBuilder(
        BlogModel.find().populate('author'),
        query
    )
        .search(['title', 'content'])
        .sort()
        .filter()
    return await blogQuery.modelQuery;
};

// get single
const getBlogByIdFromDB = async (id: string) => {
    return await BlogModel.findById(id).populate('author');
};

// update  
const updateBlogByIdInDB = async (
    id: string,
    payLoad: Partial<IBlog>
) => {
    return await BlogModel.findByIdAndUpdate(
        id,
        payLoad,
        { new: true }
    );
};

// delete  
const deleteBlogByIdFromDB = async (id: string) => {
    return await BlogModel.findByIdAndDelete(id);
};


// export the service object
export const blogService = {
    createBlogIntoDB,
    getAllBlogsFromDB,
    getBlogByIdFromDB,
    updateBlogByIdInDB,
    deleteBlogByIdFromDB
};