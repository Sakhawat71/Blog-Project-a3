import { IBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";


// create a blog into the database
const createBlogIntoDB = async (payLoad: IBlog) => {
    return await BlogModel.create(payLoad);
};

// get all the blogs from the database
const getAllBlogsFromDB = async () => {
    return await BlogModel.find();
};

// get a blog by id from the database
const getBlogByIdFromDB = async (id: string) => {
    return await BlogModel.findById(id).populate('author');
};

// update a blog by id in the database
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

// delete a blog by id from the database
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