import { z } from "zod";

// create vlidation schema
const createBlogValidation = z.object({
    body: z.object({
        title: z.string({ required_error: "Title is required" }),
        content: z.string({ required_error: "Content is required" }),
        author: z.string({ required_error: "Author is required" }).optional(),
        isPublished: z.boolean().default(true),
    })
});

// update validation schema
const updateBlogValidation = z.object({
    body: z.object({
        title: z.string().optional(),
        content: z.string().optional(),
        // author: z.string().optional(),
        // isPublished: z.boolean().optional(),
    })
});

export const blogValidation = {
    createBlogValidation,
    updateBlogValidation
};